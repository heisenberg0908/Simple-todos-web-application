const express=require('express')
const userRouter=express.Router()
const jwt=require('jsonwebtoken')
const zod=require('zod')
const {Users}=require('../db')
const JWT_SECRET=require('../config')
const {sign,verify}=require('jsonwebtoken')

const signupdata=zod.object({
    firstName:zod.string(),
    lastName:zod.string(),
    userName:zod.string().email(),
    password:zod.string().min(5)
})
userRouter.post('/signup',async(req,res)=>{
    const {success}=signupdata.safeParse(req.body)
    if(!success){
        res.status(409).json({
            msg:'invalid input type'
        })
    }
    const existinguser=await Users.findOne({
        userName:req.body.userName
    })
    if(existinguser){
        return res.status(411).json({
            msg:'user already signed up, please signin to proceed'
        })
    }
    const user=await Users.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        password:req.body.password
    })
    const userId=user._id
    const token=jwt.sign({userId},JWT_SECRET)
    res.status(200).json({
        msg:'signed up successfully',
        token:token
    })
})

const signindata=zod.object({
    userName:zod.string(),
    password:zod.string().min(5)
})
userRouter.post('/signin',async(req,res)=>{
    const {success}=signindata.safeParse(req.body)
    if(!success){
        return res.status(409).json({
            msg:'invalid input type'
        })
    }
    const user=await Users.findOne({
        userName:req.body.userName,
        password:req.body.password
    })
    if(user){
        const userId=user._id;
        const token=jwt.sign({userid},JWT_SECRET)
        res.status(200).json({
            msg:'user signed in successfully',
            token:token,
            userId:userId
        })
    }
    res.status(409).json({
        msg:'user with these credentials not found.'
    })
})

module.exports=userRouter