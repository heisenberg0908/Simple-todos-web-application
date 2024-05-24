import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export const Todos=()=>{
    const navigate=useNavigate()
    return <div className="bg-green-50 w-full">
        <div className="flex justify-between p-4">
            <div className="font-serif text-2xl font-semilight p-2">Task-Flow</div>
            <div className="p-2"><Button onClick={()=>{
                navigate('/addtodo')
            }} label={"Add todo"}/></div>
        </div>
        <div className="p-5 text-4xl flex justify-center font-semilight font-serif">
            Your list of todos
        </div>
        <Todo/>
    </div>
}

function Todo(){
    const [todos,settodos]=useState([])
    const [loading,setloading]=useState(true)
    const [error,seterror]=useState(null)

    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const response=await axios.get('http://localhost:3000/api/v1/todos/all')
                settodos(response.data.todos)
            } catch (error) {
                seterror(error)
            } finally{
                setloading(false)
            }
        }
        fetchdata()
    },[])
    if(loading){
        return <div>loading...</div>
    }
    if(error){
        return <div>Error:{error.message}</div>
    }
    const handledelete=async(id)=>{
        const updatedtodos=todos.filter(todo=>todo._id !==id);
        settodos(updatedtodos)
    
        const response=await axios.delete(`http:localhost://api/v1/todos/deletetodo/${id}`)
        settodos(response.data.todos)
    }
    return (
        <div className="p-4">
            <ul>
                {Array.isArray(todos) && todos.map((todo, index) => (
                    <li key={todo._id} className="mb-4">
                        <div className="text-2xl font-semibold font-serif p-2">{index + 1}. {todo.title}</div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" onClick={()=>handledelete(todo._id)}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                        </div>
                        <div className="text-md font-semilight font-serif p-2">{todo.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


