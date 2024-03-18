"use strict"

const User =require("../models/userModel")

module.exports = async () => {

const admin = await User.create({
    email: "admin@admin.com",
    password: "admin",
    firstName: "Test",
    lastName: "Test"
})
}