const express=require('express')
const app=express()
const userRouter=require('./routes/users')
const todoRouter=require('./routes/todos')

const cors=require("cors")
app.use(express.json())
app.use(cors())

app.use('/api/v1/users',userRouter)
app.use('/api/v1/todos',todoRouter)

const port=3000;
app.listen(port,()=>{
    console.log(`app is listening to port ${port}`)
})