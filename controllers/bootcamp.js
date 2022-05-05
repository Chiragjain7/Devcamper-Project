const { request } = require('express');
const Bootcamp1=require('../models/Bootcamp.js');

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
exports.createBootcamps=async(req,res,next)=>{
    const bootcamp=await Bootcamp1.create(req.body);  //document creation
    // console.log(req.body)
    // res.status(200).json({status:true, msg:`Create bootcamps`})
    res.status(201).json({
        success: true,
        data: bootcamp
    });
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