"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
const mongoose=require("mongoose")

//* calling crypt function
const passwordEncrypt=require("../helpers/passwordEncrypte")

//* user schema 
const UserSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            trim:true,
            unique:true,
            required:[true,"Email must be required"],
            validate:[
                (email)=>(email.includes("@")&&email.includes(".com")),
                "Incorrect email type.Check your email type"
            ]
        },
        password:{
            type:String,
            trim:true,
            required:true,
            set:(password)=> passwordEncrypt(password)
        },
        firstname:String,
        lastname:String,
    },
    {
        collection:"user",
        timestamps:true
    }
)

module.exports= mongoose.model("User",UserSchema)