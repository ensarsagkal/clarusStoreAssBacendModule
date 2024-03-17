"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
 
require("express-async-errors")
const User=require("../models/userModel")
const passwordEncrypt=require("../helpers/passwordEncrypte")
 
module.exports= {
    //*get all users
    list:async (req,res)=>{},

    //*create a user
    create:async (req,res)=>{},

    //* get single user
    read:async (req,res)=>{},

    //* update user infos
    update:async (req,res)=>{},

    //* delete user via ID
    delete:async (req,res)=>{},

    //* login controll and session configs
    login:async (req,res)=>{},

    //* logout operation
    logout:async (req,res)=>{},
}