const express=require("express")
const app=express()
const mongoose=require('mongoose');
const dotenv=require('dotenv')
const port=5003
//import route
const authRoute=require('./routes/auth.js')
const taskRoute=require('./routes/task.js')

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false } ,()=>console.log("connected to database"))

//middleware  body parser
app.use(express.json());

//Routes middleware
app.use('/category',authRoute);
app.use('/task',taskRoute);

app.listen(port,()=>console.log(`example app listen on port${port}`))