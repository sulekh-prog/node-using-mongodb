import mongoose from 'mongoose';

 export const productSchema = new Schema {
    name:String,
    description:String,
    category:String,  
    price:Number,
    

}


module.exports = model;