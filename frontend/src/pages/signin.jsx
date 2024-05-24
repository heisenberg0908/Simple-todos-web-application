import { InputBar } from "../components/inputBar"
import { Button } from "../components/button"
import { Heading } from "../components/heading"
import { SubHeading } from "../components/subHeading"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signin=()=>{
    const [userName,setuserName]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate()


    return <div className="flex justify-center h-screen bg-green-100 p-5">
        <div className="justify-center w-80 p-2 border-2 rounded-md border-slate-300 border-solid">
            <div className="flex justify-center ">
            <Heading label={"Task-Flow"}/>
            </div>
            <div className="flex justify-center">
            <SubHeading label={"Signin"}/>
            </div>
        
        <div className="p-2">
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
                    const response=await axios.post('http://localhost:3000/api/v1/users/signin',{
                    userName,
                    password
                })
                    const token=response.data.token
                    localStorage.setItem('token',token)
                    navigate('/addtodo')
                } catch (error) {
                    console.error(error)
                }
                
            }} label={"Signin"}/>
        </div>
        </div>
    </div>
}