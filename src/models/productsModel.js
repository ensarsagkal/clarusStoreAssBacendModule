"use strict";
const { urlencoded } = require("express");
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
const mongoose=require("mongoose")
const validator=require("mongoose-validator")

 function isValidURL(string){
    try {
        new URL (string)
        return true
    } catch (error) {
        return false
    }
 }
 function imageNumber(image){
    return image.length <= 3
  
 }

//* Category schema
const productCategorySchema= new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"Email must be required"],
        unique:true
    }
},{
    collection:"productCategories",
    timestamps:true
})

//* Product Schema

const productSchema= new mongoose.Schema({
    categorId:{
        required:true,
        type: mongoose.Schema.Types.ObjectId,
        ref:"ProductCategory",
        
 },
 title: {
    type: String,
    trim: true,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  discountPercentage: {
    type: Number,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    trim: true,
    required: true,
  },
  thumbnail:{
    type:String,
    required:true,
    validate:[isValidURL,"URL must be required"]

  },
  images:[{
    type:String,
    required:true,
    validate:[
        {validator:isValidURL,message:"URL must be required"},
        {validator:imageNumber,message:"restricted by 3 images "}],


    
  }]
    },{
        collection:"products",
        timestamps:true
    })

module.exports={
    ProductCategory:mongoose.model("ProductCategory",productCategorySchema),
    Product: mongoose.model("Product",productSchema)


}