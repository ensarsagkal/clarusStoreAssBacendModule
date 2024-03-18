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
router.route("/").get(User.list).post(User.create)

router.route("/:userId").get(User.read).put(User.update).patch(User.update).delete(User.delete)

module.exports=router