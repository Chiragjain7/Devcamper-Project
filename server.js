const express = require('express');
const dotenv = require('dotenv');
const res = require('express/lib/response');


// get routes files
const bootcamps=require('./routes/bootcamp.js')

//Load env vars

dotenv.config({path:'./config/config.env'});

const app=express();

app.use('/api/v1/bootcamps/',bootcamps)

// app.get('/api/v1/bootcamps/',(req,res)=>{
//     res.status(200).json({status:true, msg:'get all the bootcamps'})
// })

// app.get('/api/v1/bootcamps/:id',(req,res)=>{
//     res.status(200).json({status:true, msg:`get bootcamp ${req.params.id}`})
    
// })
// app.post('/api/v1/bootcamps/:id',(req,res)=>{
//     res.status(200).json({status:true, msg:`Create bootcamp ${req.params.id}`})
    
// })
// app.put('/api/v1/bootcamps/:id',(req,res)=>{
//     res.status(200).json({status:true, msg:`Update bootcamp ${req.params.id}`})
    
// })
// app.delete('/api/v1/bootcamps/:id',(req,res)=>{
//     res.status(200).json({status:true, msg:`delete bootcamp ${req.params.id}`})
    
// })

const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))
 