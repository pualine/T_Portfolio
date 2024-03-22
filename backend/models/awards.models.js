import { Schema, model } from "mongoose";

const awardSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    dateAwarded:{type:Date,required: true}
});

export const AwardModel = model( 'Awards', awardSchema, 'awards');