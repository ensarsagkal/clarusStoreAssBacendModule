"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
 
require("express-async-errors")
const User=require("../models/userModel")
const passwordEncrypt=require("../helpers/passwordEncrypte")
 
module.exports= {
    //*get all users
    list:async (req,res)=>{
        const data= await User.find()
        res.status(200).send({
            error: false,
            data:data
        })
    },

    //*create a user
    create:async (req,res)=>{
        const data = await User.create(req.body)
        res.status(201).send({
            error:false,
            body:req.body,
            data
        })
    },

    //* get single user
    read:async (req,res)=>{
        const data= await User.findOne({_id:req.params.userId})
        res.status(202).send({
            error:false,
            data
        })
    },

    //* update user infos
    update:async (req,res)=>{
        const data= await User.updateOne({_id:req.params.userId},req.body)
        const updatedData= await User.findOne({_id:req.params.userId})
        res.status(202).send({
            error:false,
            body:req.body,
            data,
            updatedData
        })
    },

    //* delete user via ID
    delete:async (req,res)=>{
        const data= await User.deleteOne({_id:req.params.userId})
        res.sendStatus(data.deletedCount>=1? 204:404)
    },

    //* login controll and session configs
    login:async (req,res)=>{},

    //* logout operation
    logout:async (req,res)=>{},
}