"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
const express=require("express")
const app=express()     //*use express

app.use(express.json())

require("dotenv").config()
 const PORT=process.env.PORT
 const HOST=process.env.HOST
require("./src/db")     //*db connection

const session= require("cookie-session")   //*cookie sessions
app.use(session({secret:process.env.SECRET_KEY}))



app.use(require("./src/errorHandler"))    //* errorhandler 

 app.listen(PORT, () => console.log(` Server Running on http://${HOST}:${PORT}`))