console.log('controller1.js')
const { request } = require('express');
const Bootcamp1=require('../models/Bootcamp.js');
const errorResponse = require('../utils/errorResponse');
const geocoder = require('../utils/geocoder');
const asyncHandler = require('../middleware/async');

console.log('controller2.js')

// @desc     Get all bootcamps
// @route    GET /api/v1/bootcamps/
// @access   Public
exports.getBootcamps= asyncHandler(async(req,res,next)=>{
    const bootcamps=await Bootcamp1.find();
    res.status(200).json({success: true, count:bootcamps.length, data: bootcamps});
    

})

// @desc     Get single bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp= asyncHandler(async(req,res,next)=>{

    const bootcamp = await Bootcamp1.findById(req.params.id)
    if(!bootcamp){
        return next(new errorResponse(`Bootcamp not found for ${req.params.id}`,404));
    }
    res.status(200).json({success:true, data:bootcamp});


})

// @desc     Create bootcamps
// @route    POST /api/v1/bootcamps/
// @access   Private
exports.createBootcamps=asyncHandler(async(req,res,next)=>{
    const bootcamp=await Bootcamp1.create(req.body);  //document creation
    res.status(201).json({
        success: true,
        data: bootcamp
    });
    
})

// @desc     Update bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Private
exports.updateBootcamp= asyncHandler(async (req,res,next)=>{
    const bootcamp= await Bootcamp1.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true
    })
    if(!bootcamp){
        return res.status(400).json({success: false});
    }
    res.status(200).json({success: true, data: bootcamp});
})



// @desc     delete bootcamp
// @route    GET /api/v1/bootcamps/:id
// @access   Private
exports.deleteBootcamp= asyncHandler(async (req,res,next)=>{
    const bootcamp= await Bootcamp1.findByIdAndDelete(req.params.id)
    if(!bootcamp){
        return res.status(400).json({success: false});
    }
    res.status(200).json({success: true, data: {}});
    
})

// @desc      Get bootcamps within a radius
// @route     GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access    Private
exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => {
    const { zipcode, distance } = req.params;
  
    // Get lat/lng from geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;
  
    // Calc radius using radians
    // Divide dist by radius of Earth
    // Earth Radius = 3,963 mi / 6,378 km
    const radius = distance / 3963;
  
    const bootcamps = await Bootcamp1.find({
      location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
    });
  
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps
    });
  });