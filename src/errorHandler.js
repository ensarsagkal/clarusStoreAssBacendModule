"use strict";
/* -------------------------------------------------------
CLARUS STORE
------------------------------------------------------- */
module.exports =(err,req,res,next)=>{
    const errorStatusCode=res.errorStatusCode ?? 500
    res.status(errorStatusCode).send({
        error:true,
        message:err.message,
        cause: err.cause
    })
}