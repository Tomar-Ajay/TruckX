const express=require('express');
const router=express.Router();
const request=require('request');

router.post('/',async (req,res)=>{
  const imei=req.query.imei;
  if(!imei)
   return res.send('Enter Imei');
  
  const command=req.body.command;
  const requestBody={
    'type': 'COMMAND',
    'imei': imei,
    'command': command
  }


  //url and method of frontend is unknown at this time
  const requestOptions={
    url:'...............',
    method:'....',
    timeout:'....',
    body:requestBody,
    headers:{
      'Content-Type':'application/json'
    }
  }

  Promise.resolve().then(()=>{
    return request(requestOptions)
  }).then((resp)=>{
      return res.send(resp);
  }).catch((err)=>{
    return res.send(err);
  })
})

module.exports=router;