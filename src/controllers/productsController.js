"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
require("express-async-errors")
const {ProductCategory,Product}=require("../models/productsModel")

module.exports.ProductCategory={
    list:async (req,res)=>{
       const data= await ProductCategory.res.getModelList(ProductCategory)
        res.status(200).send({
            error:false,
            data:data
        })
    },
    
    read:async (req,res)=>{
        const data= await ProductCategory.findOne({_id:req.params.productCategoryId}) //& PARAM'a bak
        res.status(200).send({
            error:false,
            data:data
        })
    },
   
}
module.exports.Product={
    list:async (req,res)=>{
        const data= await Product.res.getModelList(Product,"productCategoryId")
        res.status(200).send({
            error:false,
            data:data
        })
    },
    
    read:async (req,res)=>{
        const data= await Product.findOne({_id:req.params.productId}) //& PARAM'a bak
        res.status(200).send({
            error:false,
            data:data
        })
    },
   
}