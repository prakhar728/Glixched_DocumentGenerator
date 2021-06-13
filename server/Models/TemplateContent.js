import mongoose from 'mongoose';

const templateSchema = mongoose.Schema({
    Name:String,
    CollegeName:String,
    Batch:String,
    Aim:String,
    ExperimentNo:Number,
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

const PostMessage = mongoose.model('PostMessage',postSchema);

export default templateSchema;
