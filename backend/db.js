const mongoose=require('mongoose')
mongoose.connect('')//add your mongodb url here

const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    password:String
})
const todoSchema=new mongoose.Schema({
    title:String,
    description:String
})

const Users=new mongoose.model('Users',userSchema)
const Todos=new mongoose.model('Todos',todoSchema)

module.exports={
    Users,
    Todos
}