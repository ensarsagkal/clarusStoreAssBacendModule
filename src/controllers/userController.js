"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
 
require("express-async-errors")
const User=require("../models/userModel")
const passwordEncrypt=require("../helpers/passwordEncrypte")
 
module.exports= {
    //*get all users
  /*  list:async (req,res)=>{
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
    }, */

    //* login controll and session configs
    login:async (req,res)=>{
        const {email,password}=req.body  //* dest. req.body
        if(email && password){
            const user= await User.findOne({email})  //* finding user via his mail
            if(user && password == passwordEncrypt(password)){
                req.session.id=user.id
                req.session.remindMe=req.body.remindMe,
                req.sessionOptions.maxAge=1000*60*60*24*3 //* setting for 3 days-cookie

                res.status(200).send({
                    error:false,
                    message: "login OK",
                    user
                })
            }else{
                res.errorStatusCode=401
                throw new Error('Login parameters are not true.')
            }
        }else{
            res.errorStatusCode = 401
            throw new Error('Email and password are required.')
        } 
        
    },

    //* logout operation
    logout:async (req,res)=>{

        req.session= null   //* session destroy
        res.status(200).send({
            error:false,
            message:"logout OK"
        })
    },
}