import { Schema, model } from "mongoose";


const blogSchema = new  Schema({
    title: { type : String , required : true },
    content :{type :String , required :true},
    author:{
        id:{
            type:Schema.Types.ObjectId, ref:"User"},
        username:String},

    dateCreated:{ type: Date, required : true, default:Date.now() },
    timeCreated:{type:Number}, //time in seconds
    blogImage:{type:String, required: true}
});

export const  BlogModel = model( 'Blog',blogSchema, 'blogs'); 
//we are creating a mongoose model called Blog and we are linking it to the schema defined above with the name of our collection being '
//the third parameter is the collection name