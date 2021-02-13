const express=require('express');
const router=express.Router();
const Video=require('../models/video');

router.get('/',async(req,res)=>{
  const imei=req.query.imei;

  const filter={};
  if(imei)
   filter.imei=imei;
  
  const videos=await Video.find(filter);
  return res.send(videos);
})

module.exports=router;