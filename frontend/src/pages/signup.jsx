import { InputBar } from "../components/inputBar"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { SubHeading } from "../components/subHeading"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Signup=()=>{
    const [firstName,setfirstName]=useState("")
    const [lastName,setlastName]=useState("")
    const [userName,setuserName]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()


    return <div className="flex justify-center bg-green-100 p-5">
        <div className="justify-center w-80 p-2 border-2 rounded-md border-slate-300 border-solid">
            <div className="flex justify-center ">
            <Heading label={"Task-Flow"}/>
            </div>
            <div className="flex justify-center">
            <SubHeading label={"Signup"}/>
            </div>
        
        <div className="p-2">
            <InputBar onChange={(e)=>{
                setfirstName(e.target.value)
            }} label={"First Name"} placeholder={"eg john.."}/>
            <InputBar onChange={(e)=>{
                setlastName(e.target.value)
            }} label={"Last Name"} placeholder={"eg doe.."}/>
            <InputBar onChange={(e)=>{
                setuserName(e.target.value)
            }} label={"UserName"} placeholder={"eg johndoe@gmail.com.."}/>
            <InputBar onChange={(e)=>{
                setpassword(e.target.value)
            }} label={"Password"} placeholder={"min 5 characters"}/>
        </div>
        <div className="flex justify-center p-3">
            <Button onClick={async()=>{
                try {
                    const response=await axios.post('http://localhost:3000/api/v1/users/signup',{
                    firstName,
                    lastName,
                    userName,
                    password
                })
                    const token=response.data.token
                    localStorage.setItem('token',token)
                    navigate('/addtodo')
                } catch (error) {
                    console.error(error)
                }
                
            }} label={"Signup"}/>
        </div>
        </div>
    </div>
}