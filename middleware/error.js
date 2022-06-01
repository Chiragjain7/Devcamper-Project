console.log('errors.js')
const ErrorResponse = require('../utils/errorResponse');

const errorHandler=(err,req,res,next)=>{
    //console.log(res.stack.red);
    error={...err};
    error.message=err.message;

    //Mongoose bad ObjectId
    if(err.name=='CastError'){
        console.log(`Resource not found : ${err.value}`);
        const message = `Resource not found`;
        error=new ErrorResponse(message,404);
        
    }

    //Mongoose duplicate key
    console.log(error);
    if(err.code===11000){
        const message = `Duplicate field entered`;
        error=new ErrorResponse(message,400);
        
    }

    //Mongoose validation error
    if(err.name=='ValidationError'){
        const message = Object.values(err.errors).map(val=>val.message);
        error=new ErrorResponse(message,400);
        
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'server error'

    });
};

module.exports=errorHandler;