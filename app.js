const express = require ('express')
const mongoose= require ('mongoose')
// const favicon = require('express-favicon');
const Visitor= require('./models/visitor')
const Task= require('./models/task_model')
const SubTask= require('./models/subTask_model')
const User=require('./models/user_model')
var favicon = require('serve-favicon')
var path = require('path')
//db password= dV9ebXYfpnxYi8D
//heroku password = UEcbQ;P7`:~p~jA (doesnt include '=')
const app=express()

// app.use(favicon(__dirname + './assets/favicon.png'));
app.use(favicon(path.join(__dirname, './assets/favicon.ico')))
mongoose
.connect('mongodb+srv://Abhishek:dV9ebXYfpnxYi8D@cluster0.xep43.mongodb.net/task_base?retryWrites=true&w=majority',
    {
    useNewUrlParser:true,
    useUnifiedTopology:true, useFindAndModify: false
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
//app.    use(bodyParser.urlencoded({ extended: true }));
app.post('/postnewtask',async(req,res)=>{    
    const task= new Task({
        taskID : req.body.taskID,
        taskTitle : req.body.taskTitle,
        taskDescription:req.body.taskDescription,
        taskCreatedDate : req.body.taskCreatedDate,
        taskCreatedTime : req.body.taskCreatedTime,
        taskCreatedBy : req.body.taskCreatedBy,
        taskStatus : req.body.taskStatus,
        taskTargetDate : req.body.taskTargetDate,
        taskTargetTime : req.body.taskTargetTime,
        subtasks : req.body.subtasks,
        collaborators : req.body.collaborators
        })       
       
        console.log('Got body:', req.body.taskTitle); 
         console.log()
         try{
            const v1= await task.save()
            res.json(v1)
        }catch(Err){console.log(Err)}
})

app.get('/getspecifictask',async(req,res) => {
    try
    {
        const task=await Task.find
        (
            {taskID:req.body.taskID},
                 (error,data)=>
                     {
                           if(error)
                                   {  
                                   res.json(error)
                                   }
                              else
                                     {  res.json(data)
                                  }
        })
      
    }
    catch(err){}
})


app.get('/updatesubtaskstatus',async(req,res) => {
    const newStatus = { taskStatus: req.body.newStatus };
   let doc = await Task.findOneAndUpdate(
    {
        taskID: req.body.taskID,
        'subtasks.subtaskID': req.body.subtaskID 
      },
      {
        $set: {
          'subtasks.$.subTaskStatus': req.body.newStatus
        }}
   );
       
   
    res.json(doc)
})


app.get('/updatetaskstatus',async(req,res) => {
    const newStatus = { taskStatus: req.body.newStatus };
    const filter = { taskID: req.body.taskID };
   let doc = await Task.findOneAndUpdate(filter,newStatus   
   );
       
   
    res.json(doc)
})


app.get('/updatetask',async(req,res) => {
    const newStatus = {
        taskTitle : req.body.taskTitle,
        taskDescription:req.body.taskDescription,
        taskTargetDate : req.body.taskTargetDate,
        taskTargetTime : req.body.taskTargetTime,
    };
    const filter = { taskID: req.body.taskID };
   let doc = await Task.findOneAndUpdate(filter,newStatus   
   );
       
   
    res.json(doc)
})



app.get('/updatesubtask',async(req,res) => {
    const newStatus = {      
        subtaskTitle: req.body.subtaskTitle,         
        subTaskTargetDate: req.body.subTaskTargetDate,
        subTaskTargetTime:req.body.subTaskTargetTime,
    };
    const filter = { taskID: req.body.taskID };
    let doc = await Task.findOneAndUpdate(
        {
            taskID: req.body.taskID,
            'subtasks.subtaskID': req.body.subtaskID 
          },
          {
            $set: {
              'subtasks.$.subtaskTitle': req.body.subtaskTitle,
              'subtasks.$.subTaskTargetDate': req.body.subTaskTargetDate,
              'subtasks.$.subTaskTargetTime': req.body.subTaskTargetTime
            }}
       );
   
    res.json(doc)
})











app.post('/postnewsubtask',async(req,res)=>{
    
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
            
          //   console.log(JSON.stringify(req.body))
             try{
                const v1= await subtask.save()
                res.json(v1)
            }catch(Err){console.log(Err)}
    })

    app.post('/postnewuser',async(req,res)=>{
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
                
             //    console.log(JSON.stringify(req.body))
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

app.get('/getspecificuser',async(req,res) => {
    try
    {

        console.log(req.body.userName)
        const user=await User.find
        (
            {userName:req.body.userName},
                 (error,data)=>
                     {
                           if(error)
                                   {  
                                   res.json(error)
                                   }
                              else
                                     {  res.json(data)
                                  }
        })
      
    }
    catch(err){}
})

const taskdogrouter_2=require('./routers/watchdogrouter')
app.use('/tasks',taskdogrouter_2)
const host = '0.0.0.0';
const port = process.env.PORT || 9000;
app.listen(port,host,() => {console.log('Success 8000')})