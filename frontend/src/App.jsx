import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./pages/home"
import { Signin } from "./pages/signin"
import { Signup } from "./pages/signup"
import { AddTodo } from "./pages/addtodo"
import { Todos } from "./pages/todos"
import './App.css'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/addtodo" element={<AddTodo/>}/>
      <Route path="/todos" element={<Todos/>}/>

    </Routes>
  </BrowserRouter>
}

export default App
