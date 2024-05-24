import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"

export const Home=()=>{
    const navigate=useNavigate()
    return <div className="h-full bg-green-50">
        <div className="flex justify-between p-4">
        <div className="text-4xl font-semilight p-2">
            Task-Flow
        </div>
        <div className="flex p-4">
            <Button onClick={()=>{
                navigate('/signup')
            }} label={"signup"}/>
            <Button onClick={()=>{
                navigate('/signin')
            }} label={"signin"}/>
        </div>
        </div>
        <div className="text-6xl font-extralight flex justify-center font-serif">
        Organize your work <br></br> and life finally.
        </div>
        <div className="text-2xl p-4 font-thin flex justify-center font-serif">
        Become focused, organized, and calm with Task-Flow. <br></br> The world’s #1 task manager and to-do list app
        </div>
        <div className="flex justify-center p-3">
            <Button onClick={()=>{
                navigate('/signup')
            }} label={"Start for free"}/>
        </div>
        <div className="grid grid-cols-4 p-5 flex justify-between">
            <div className="font-serif text-xl italic">“Simple,<br></br> straightforward,<br></br>and super powerful”</div>
            <div className="font-serif text-xl italic">“Simply a joy to use”</div>
            <div className="font-serif text-xl italic">“The best to-do list app<br></br> on the market”</div>
            <div className="font-serif text-xl italic">“Nothing short of<br></br> stellar”</div>
        </div>
        <div>
            <div className="text-green-500 text-xl font-semibold p-3">Clear your mind</div>
            <div className="text-2xl font-normal p-3 font-serif">The fastest way to get tasks out of your head.</div>
            <div className="text-xl font-thin p-3 font-serif">Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list</div>
        </div>
        <div>
            <div className="text-green-500 text-xl font-semibold p-3">Focus on what’s important</div>
            <div className="text-2xl font-normal p-3 font-serif">Reach that mental clarity you’ve been longing for.</div>
            <div className="text-xl font-thin p-3 font-serif">Your tasks are automatically sorted into Today, Upcoming, and custom filter views to help you prioritize your most important work.</div>
        </div>
        <div>
            <div className="text-green-500 text-xl font-semibold p-3">Organize your teamwork, too</div>
            <div className="text-2xl font-normal p-3 font-serif">Where all your tasks can finally coexist.</div>
            <div className="text-xl font-thin p-3 font-serif">Give your team a shared space to collaborate and stay on top of it all – alongside but separate from your personal tasks and projects.</div>
        </div>
    </div>
}