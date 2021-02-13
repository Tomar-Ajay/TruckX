const express=require('express');
const router=express.Router();
const Alarm=require('../models/alarm');


router.get('/dashcam', async (req,res)=>{
  const imei=req.query.imei;
  if(!imei)
   return res.send('Enter correct device imei');
  
  const alarms=await Alarm.find({imei})
  return res.send(alarms);
})

router.get('/dashcam', async (req,res)=>{
  const imei=req.query.imei;
  const start_time=req.query.start_time;
  const end_time=req.query.end_time;
  const type=req.query.alarm_type;
  if(!imei)
   return res.send('Enter correct device imei');
  
  const filter={};
  filter.imei=imei;
  
  if(type)
   filter.type=type;
  
  if(!end_time)
   end_time=Date.now();
  
  filter.time={
    $gte:start_time,
    $lte:end_time
  }
  const alarms=await Alarm.find(filter)
  return res.send(alarms);
})

module.exports=router;