const mongoose= require ('mongoose')
const taskSchema = new mongoose.Schema({
    taskID:String,
    taskTitle:String,
    taskCreatedDate:String,
    taskCreatedTime:String,
    taskCreatedBy:String,
    taskStatus:String,
    taskTargetDate:String,
    taskTargetTime:String

})  
module.exports=mongoose.model('Task',taskSchema)