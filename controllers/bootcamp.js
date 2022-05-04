// @desc     Get all bootcamps
// @route    GET /api/v1/bootcamps/
// @access   Public
exports.getBootcamps=(req,res,next)=>{
    res.status(200).json({status:true, msg:'get all the bootcamps'})
}

// @desc     Get single bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({status:true, msg:`get bootcamp ${req.params.id}`})
}

// @desc     Create bootcamps
// @route    POST /api/v1/bootcamps/
// @access   Private
exports.createBootcamps=(req,res,next)=>{
    res.status(200).json({status:true, msg:`Create bootcamps`})
}

// @desc     Update bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Private
exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({status:true, msg:`Update bootcamp ${req.params.id}`})
}

// @desc     delete bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Private
exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({status:true, msg:`delete bootcamp ${req.params.id}`})
}