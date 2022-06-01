const express = require('express');
const dotenv = require('dotenv');
const res = require('express/lib/response');
dotenv.config({path:'./config/config.env'});
const colors = require('colors');
const morgan = require('morgan');
const errorHandler=require('./middleware/error')
const connectDB =require('./config/db')

console.log('server.js')
// get route files
const bootcamps=require('./routes/bootcamp.js')

//Load env vars

// dotenv.config({path:'./config/config.env'});

const app=express();


//get middleware
//const logger = require('./middleware/logger.js');
const req = require('express/lib/request');

//connect MongoDB database

connectDB();

//middleware
//app.use(logger);
app.use(express.json());   //parse request

//mount routes
app.use('/api/v1/bootcamps/',bootcamps);
app.use(errorHandler);



// app.get('/api/v1/bootcamps/',(req,res)=>{
//     res.status(200).json({status:true, msg:'get all the bootcamps'})
// })


const PORT=process.env.PORT || 5000;

const server=app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))

process.on('unhandledRejection',(err,promise) =>{
    console.log(`Error: ${err.message}`);

    server.close(() => {
        process.exit(1)
    });
}) 

