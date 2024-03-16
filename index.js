"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
const express=require("express")
const app=express()

app.use(express.json())

require("dotenv").config()
 const PORT=process.env.PORT
 const HOST=process.env.HOST
require("./src/db")


 app.listen(PORT, () => console.log(` Server Running on http://${HOST}:${PORT}`))