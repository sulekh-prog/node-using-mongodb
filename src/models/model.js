import mongoose from 'mongoose';

 export const productSchema = new Schema {
    name:{
        type:String, 
        required:true},
    description:{
        type:String,
         required:true},
    category:{
        type:String,
         required:true},
    price:{
        type:Number},
    created_date:{
        type:Date,
         default:Date.now
        }
        
 }


// module.exports = model;