const mongoose=require('mongoose')

const CompletedSchema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:String,
    date:Date
})


const TaskCompleted =mongoose.model('TaskCompleted',CompletedSchema)
module.exports=TaskCompleted;