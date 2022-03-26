const mongoose=require('mongoose')

const todoListSchema=new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:String,
    date:Date,
    completed:Boolean
})


const TodoListSchema =mongoose.model('TodoListSchema',todoListSchema)
module.exports=TodoListSchema;
