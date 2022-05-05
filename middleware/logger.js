// @desc print logs
const logger=(req,res,next)=>{
    req.hello='hello world middleware';
    console.log('Hello from middleware');
    next();
}

module.exports=logger;