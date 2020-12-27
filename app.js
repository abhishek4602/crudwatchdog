const express = require ('express')
const mongoose= require ('mongoose')
// const favicon = require('express-favicon');
const Visitor= require('./models/visitor')
<<<<<<< HEAD
const Task= require('./models/task_model')
const SubTask= require('./models/subTask_model')
const User=require('./models/user_model')
=======
>>>>>>> b9602ed490c541204e58dc581dcb90bee91167cc
var favicon = require('serve-favicon')
var path = require('path')
//db password= dV9ebXYfpnxYi8D
//heroku password = UEcbQ;P7`:~p~jA (doesnt include '=')
const app=express()

// app.use(favicon(__dirname + './assets/favicon.png'));
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')))
mongoose
.connect('mongodb+srv://Abhishek:dV9ebXYfpnxYi8D@cluster0.xep43.mongodb.net/task_base?retryWrites=true&w=majority',
    {
    useNewUrlParser:true,
    useUnifiedTopology:true
    }
)
.then(()=>{console.log('Connection is M Successful');}); 
app.use(express.json());
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors())
//app.use(express.json())
 // parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/postnewtask',async(req,res)=>{
    
<<<<<<< HEAD

//task
    // taskID:String,
    // taskTitle:String,
    // taskCreatedDate:String,
    // taskCreatedTime:String,
    // taskCreatedBy:String,
    // taskStatus:String,
    // taskTargetDate:String,
    // taskTargetTime:String
// //subtask
    // subTaskID:String,
    // subtaskParentTaskID:String,
    // subTaskTitle:String,
    // subTaskCreatedDate:String,
    // subTaskCreatedTime:String,
    // subTaskCreatedBy:String,
    // subTaskStatus:String,
    // subTaskTargetDate:String,
    // subTaskTargetTime:String

    console.log('Got body:', req.body); 
    const task= new Task({
        taskID : req.body.taskID,
        taskTitle : req.body.taskTitle,
        taskCreatedDate : req.body.taskCreatedDate,
        taskCreatedTime : req.body.taskCreatedTime,
        taskCreatedBy : req.body.taskCreatedBy,
        taskStatus : req.body.taskStatus,
        taskTargetDate : req.body.taskTargetDate,
        taskTargetTime : req.body.taskTargetTime
=======
    console.log('Got body:', req.body); 
    const visitor= new Visitor({
        nameVisitor : req.body.nameVisitor,
        tempVisitor : req.body.tempVisitor,
        destinationFlatVisitor : req.body.destinationFlatVisitor,
        vehicleNumberVisitor : req.body.vehicleNumberVisitor,
        timeStamp : req.body.timeStamp,
        visitorType : req.body.visitorType
>>>>>>> b9602ed490c541204e58dc581dcb90bee91167cc
        })
        const subtask= new SubTask({
            subTaskID : req.body.subTaskID,
            subtaskParentTaskID : req.body.subtaskParentTaskID,
            subTaskTitle : req.body.subTaskTitle,
            subTaskCreatedDate : req.body.subTaskCreatedDate,
            subTaskCreatedTime : req.body.subTaskCreatedTime,
            subTaskCreatedBy : req.body.subTaskCreatedBy,
            subTaskStatus : req.body.subTaskStatus,
            subTaskTargetDate : req.body.subTaskTargetDate,
            subTaskTargetTime : req.body.subTaskTargetTime
            })

        const user= new User({
            userID : req.body.userID,
            userName : req.body.userName,
            userPhoto : req.body.userPhoto,
        })    
        
         console.log(JSON.stringify(req.body))
         try{
            const v1= await task.save()
            res.json(v1)
        }catch(Err){console.log(Err)}
})

app.post('/postnewsubtask',async(req,res)=>{
    

    //task
        // taskID:String,
        // taskTitle:String,
        // taskCreatedDate:String,
        // taskCreatedTime:String,
        // taskCreatedBy:String,
        // taskStatus:String,
        // taskTargetDate:String,
        // taskTargetTime:String
    // //subtask
        // subTaskID:String,
        // subtaskParentTaskID:String,
        // subTaskTitle:String,
        // subTaskCreatedDate:String,
        // subTaskCreatedTime:String,
        // subTaskCreatedBy:String,
        // subTaskStatus:String,
        // subTaskTargetDate:String,
        // subTaskTargetTime:String
    
        console.log('Got body:', req.body); 
        const task= new Task({
            taskID : req.body.taskID,
            taskTitle : req.body.taskTitle,
            taskCreatedDate : req.body.taskCreatedDate,
            taskCreatedTime : req.body.taskCreatedTime,
            taskCreatedBy : req.body.taskCreatedBy,
            taskStatus : req.body.taskStatus,
            taskTargetDate : req.body.taskTargetDate,
            taskTargetTime : req.body.taskTargetTime
            })
            const subtask= new SubTask({
                subTaskID : req.body.subTaskID,
                subtaskParentTaskID : req.body.subtaskParentTaskID,
                subTaskTitle : req.body.subTaskTitle,
                subTaskCreatedDate : req.body.subTaskCreatedDate,
                subTaskCreatedTime : req.body.subTaskCreatedTime,
                subTaskCreatedBy : req.body.subTaskCreatedBy,
                subTaskStatus : req.body.subTaskStatus,
                subTaskTargetDate : req.body.subTaskTargetDate,
                subTaskTargetTime : req.body.subTaskTargetTime
                })
    
            const user= new User({
                userID : req.body.userID,
                userName : req.body.userName,
                userPhoto : req.body.userPhoto,
            })    
            
             console.log(JSON.stringify(req.body))
             try{
                const v1= await subtask.save()
                res.json(v1)
            }catch(Err){console.log(Err)}
    })

    app.post('/postnewuser',async(req,res)=>{
    

        //task
            // taskID:String,
            // taskTitle:String,
            // taskCreatedDate:String,
            // taskCreatedTime:String,
            // taskCreatedBy:String,
            // taskStatus:String,
            // taskTargetDate:String,
            // taskTargetTime:String
        // //subtask
            // subTaskID:String,
            // subtaskParentTaskID:String,
            // subTaskTitle:String,
            // subTaskCreatedDate:String,
            // subTaskCreatedTime:String,
            // subTaskCreatedBy:String,
            // subTaskStatus:String,
            // subTaskTargetDate:String,
            // subTaskTargetTime:String
        
            console.log('Got body:', req.body); 
            const task= new Task({
                taskID : req.body.taskID,
                taskTitle : req.body.taskTitle,
                taskCreatedDate : req.body.taskCreatedDate,
                taskCreatedTime : req.body.taskCreatedTime,
                taskCreatedBy : req.body.taskCreatedBy,
                taskStatus : req.body.taskStatus,
                taskTargetDate : req.body.taskTargetDate,
                taskTargetTime : req.body.taskTargetTime
                })
                const subtask= new SubTask({
                    subTaskID : req.body.subTaskID,
                    subtaskParentTaskID : req.body.subtaskParentTaskID,
                    subTaskTitle : req.body.subTaskTitle,
                    subTaskCreatedDate : req.body.subTaskCreatedDate,
                    subTaskCreatedTime : req.body.subTaskCreatedTime,
                    subTaskCreatedBy : req.body.subTaskCreatedBy,
                    subTaskStatus : req.body.subTaskStatus,
                    subTaskTargetDate : req.body.subTaskTargetDate,
                    subTaskTargetTime : req.body.subTaskTargetTime
                    })
        
                const user= new User({
                    userID : req.body.userID,
                    userName : req.body.userName,
                    userPhoto : req.body.userPhoto,
                })    
                
                 console.log(JSON.stringify(req.body))
                 try{
                    const v1= await user.save()
                    res.json(v1)
                }catch(Err){console.log(Err)}
        })

app.get('/subtasks',async(req,res) => {
    try
    {
        const subtask=await SubTask.find()
        res.json(subtask)
    }
    catch(err){}
})

app.get('/users',async(req,res) => {
    try
    {
        const user=await User.find()
        res.json(user)
    }
    catch(err){}
})

app.get('/tasks',async(req,res) => {
    try
    {
        const task=await Task.find()
        res.json(task)
    }
    catch(err){}
})


const taskdogrouter_2=require('./routers/watchdogrouter')
app.use('/tasks',taskdogrouter_2)

app.listen(process.env.PORT ||9000,() => {console.log('Success 8000')})