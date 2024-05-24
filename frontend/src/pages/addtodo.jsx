import { Button } from "../components/button"
import { useState } from "react"
import { InputBar } from "../components/inputBar"
import { Heading } from "../components/heading"
import { SubHeading } from "../components/subHeading"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const AddTodo=()=>{
    const [title,settitle]=useState("")
    const [description,setdescription]=useState("")
    const navigate=useNavigate()


    return <div className="flex justify-center h-screen bg-green-100 p-5">
        <div className="justify-center w-80 p-2 border-2 rounded-md border-slate-300 border-solid">
            <div className="flex justify-center ">
            <Heading label={"Task-Flow"}/>
            </div>
            <div className="flex justify-center">
            <SubHeading label={"Add Todo"}/>
            </div>
        
        <div className="p-2">
            <InputBar onChange={(e)=>{
                settitle(e.target.value)
            }} label={"Title"} placeholder={"eg play.."}/>
            <InputBar onChange={(e)=>{
                setdescription(e.target.value)
            }} label={"Description"} placeholder={"eg have a play football from 5 to 6"}/>
        </div>
        <div className="flex justify-center p-4">
            <Button onClick={async()=>{
                try {
                    const response=await axios.post('http://localhost:3000/api/v1/todos/todo',{
                    title,
                    description
                })
                if(response){
                    navigate('/todos')
                }
                } catch (error) {
                    console.error(error)
                }
                
            }} label={"AddTodo"}/>
        </div>
    </div>
    </div>
}