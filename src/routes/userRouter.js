"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
const router = require("express").Router()
const User= require("../controllers/userController")


//* user route operations

//*   login/logout
router.post("/login",User.login)
router.all("/logout",User.logout)


//*    CRUD's


module.exports=router