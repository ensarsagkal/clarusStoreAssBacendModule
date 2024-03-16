const mongoose=require("mongoose")
const MONGODB=process.env.MONGODB
mongoose.connect(MONGODB)
.then(()=> console.log("**DB CONNECTED**"))
.catch(()=> console.log("!! DB not CONNECTED!!"))