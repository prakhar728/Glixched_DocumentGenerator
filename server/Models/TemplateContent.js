import mongoose from 'mongoose';

const templateSchema = mongoose.Schema({
    Name:String,
    CollegeName:String,
    Batch:String,
    Aim:String,
    ExperimentNo:Number,
    RollNumber:Number,
    Theory:{
        type:String,
        required:false
    },
    Procedure:{
        type:String,
        required:false
    },
    Apparatus:{
        body:[String],
        required:false
    },
    Conclusion:{
        body:String,
        required:false
    }
});

const tempSchema = mongoose.model('Template',templateSchema);

export default tempSchema;
