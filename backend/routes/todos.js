const express=require('express')
const todoRouter=express.Router()
const { Todos}=require('../db')
const zod=require('zod')

todoRouter.get('/all',async(req,res)=>{
    const todos=await Todos.find({})
    return res.status(200).json({
        msg:'all todos',
        todos:todos
    })
})
todoRouter.get('/todo',async(req,res)=>{
    const todo=await Todos.findOne({
        todoId:req.params.todoId
    })
    if(!todo){
        return res.status(411).json({
            msg:'todo with this id not found'
        })
    }
    return res.status(200).json({
        todo:todo
    })
})
todoRouter.delete('/deletetodo',async(req,res)=>{
    const todo=Todos.deleteOne({
        todoId:req.params.todoId
    })
    if(!todo){
        return res.status(411).json({
            msg:'todo with this id not found'
        })
    }
    return res.status(200).json({
        msg:'todo deleted successfully',
        todo:todo
    })
})
todoRouter.put('/todo',async(req,res)=>{
        const todo=await Todos.findOneandUpate({
            _id:req.body.todoId},{$set :{title:req.body.title ,description:req.body.description}}
        )
        if(!todo){
            return res.status(411).json({
                msg:'some error occurred while deleting it'
            })
        }
        return res.status(200).json({
            msg:'todo updated successfully',
            todo:todo
        })
})

const todopostdata=zod.object({
    title:zod.string(),
    description:zod.string()
})
todoRouter.post('/todo',(req,res)=>{
    const {success}=todopostdata.safeParse(req.body)
    if(!success){
        return res.status(409).json({
            msg:'invalid input credentials'
        })
    }
    const todo=Todos.create({
        title:req.body.title,
        description:req.body.description
    })
    const todoId=todo._id
    res.status(200).json({
        msg:'todo added successfully',
        todoId:todoId
    })
})

module.exports=todoRouter