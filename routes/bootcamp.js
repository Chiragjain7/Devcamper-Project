console.log('routes.js')
const express=require('express');
const {getBootcamps,getBootcamp,createBootcamps,updateBootcamp,deleteBootcamp,getBootcampsInRadius} = require('../controllers/bootcamp.js')

const router=express.Router();

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(createBootcamps)

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)
// router.get('/',(req,res)=>{
//     res.status(200).json({status:true, msg:'get all the bootcamps'})
// })


module.exports = router;