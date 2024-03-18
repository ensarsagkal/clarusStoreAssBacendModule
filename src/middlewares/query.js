"use strict"

module.exports= (req,res,next)=>{

    // const{filter={},search}=req.query
    const filter= req.query?.filter || {}
    
    const search= req.query?.search || {}
    let searchQuery = [];
    if (search) {
        searchQuery.$or= [
            { title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
        ];
    }


    const sort = req.query?.sort || {}


    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE || 20)

    let page = Number(req.query?.page)

    page = page > 0 ? (page - 1) : 0


    let skip = Number(req.query?.skip)
    skip = skip > 0 ? skip : (page * limit)
    

    res.getModelList= async function(Model,populate=null){
        return await  Model.find({...filter,...searchQuery}).sort(sort).skip(skip).limit(limit).populate(populate)
    }
    next()
}

