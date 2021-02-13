const express=require('express');
const app=express();
const alarmRoute=require('./routes/alarm')
const videoRoute=require('./routes/video')
const commandRoute=require('./routes/command')
const db=require('./db/mongoose')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/alarm',alarmRoute);
app.use('/video',videoRoute);
app.use('/command',commandRoute);

app.use('/',(req,res)=>{
  res.send('Api is working');
})

app.listen(3000,()=>{
  console.log('app is listening on port 3000')
});