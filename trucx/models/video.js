const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var video=new Schema({
    _id:Schema.Types.ObjectId,
    imei:{
        type:Number,
        required:true
    },
    filename:{
        type:String,
        require:true
    },
    data:{
        type:Buffer
    }
});

module.exports=mongoose.model('Video',video);