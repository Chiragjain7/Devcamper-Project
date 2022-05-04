const express=require('express');
const {getBootcamps,getBootcamp,createBootcamps,updateBootcamp,deleteBootcamp} = require('../controllers/bootcamp.js')

const router=express.Router();

router.route('/').get(getBootcamps).post(createBootcamps)

router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)
// router.get('/',(req,res)=>{
//     res.status(200).json({status:true, msg:'get all the bootcamps'})
// })


module.exports = router;