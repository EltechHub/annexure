const express =require( "express");
const Jurnal=require('../models/JurnalModel')

//method get (get all jurnals)
const getAllJurnals=async (req, res)=>{
    try{
        const jurnals=await Jurnal.findAll();

        res.status(200).json({
            message:'success',
            jurnals:jurnals
        })
    }catch(err)
    {
        res.send(err);
    }
}

//get jurnals  by one by
const getJurnalById =async (req, res)=>{
    try{
      //  const jurnals= await Jurnal.findOne(req.params.id)

        const jurnals = await Jurnal.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(jurnals);

        if(!jurnals){
            return res.status(404).json({
                message: 'NOT FOUND'
            })
        }
    /*    return res.status(200).json({
            message: 'success',
            jurnals:jurnals,
        })*/
    }catch (error) {
        console.log(error.message);
    }
}

// POST add new jurnals
const addJurnal = async (req, res)=>{
 //   const {title, price, createdAt, updatedAt}=req.body;
    const title=req.body.title;
    const price=req.body.price;
    const createdAt=req.body.createdAt;
    const updatedAt=req.body.updatedAt;

    try {
       await Jurnal.create({title:title, price:price, createdAt:createdAt, updatedAt:updatedAt});
        res.status(201).json({msg: "Product Created Successfuly", Jurnal});

  /*      res.status(201).json({
            message: 'success',
            newJurnal:newJurnal
        })*/
    }catch (error) {
        console.log(error.message);
    }
}

//PUT method edit

const updateJurnal=async (req, res)=>{
    try {
        const {title, price, createdAt, updatedAt}=req.body;
        const updateJurnal=await Jurnal.findOne({
            where:{
                id : req.params.id,
                title:title,
                price:price
            }
        });
        res.status(200).json({
            message: 'success',
            updateJurnal:updateJurnal
        })

    }
    catch (error){
        console.log(error.message);
    }
}
//Delete method



module.exports={
    getAllJurnals,
    getJurnalById,
    addJurnal,
    updateJurnal
}
