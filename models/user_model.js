const mongoose= require ('mongoose')

const userSchema = new mongoose.Schema({
    userID:String,
    userName:String,
    userPhoto:String,
    
})  
module.exports=mongoose.model('User',userSchema)