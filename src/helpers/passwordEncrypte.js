"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */

//* Password Encryption
const crypto= require("node:crypto")
const { futimes } = require("node:fs")
const keyCode_=process.env.SECRET_KEY || "secretKeyOnEnv"
const loopCount=10_000
const charCount=32
const encType="sha512"

module.exports =function(password){
    return crypto.pbkdf2Sync(password,keyCode,loopCount,charCount,encType).toString("hex")
}