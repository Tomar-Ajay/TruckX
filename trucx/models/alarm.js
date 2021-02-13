const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var alarm=new Schema({
    _id:Schema.Types.ObjectId,
    imei:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        enum:['VIBRATION', 'OVERSPEED', 'CRASH', 'HARD_ACCELERATION', 'HARD_BRAKE','SHARP_TURN'],
        required:true
    },
    time:{
        type:Date,
        required:true,
        default:Date.now()
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    },
    file_list:[{
        type:Buffer
    }]
})

module.exports=mongoose.model('Alarm',alarm);