const express =require( "express");
const Jurnal=require('../models/JurnalModel')
const path = require("path");
const multer = require("multer");

//method get (get all travel books)
const getAllJurnals=async (req, res)=>{
    try{
        const jurnals=await Jurnal.findAll();

        res.status(200).json({
            message:'success',
            jurnals:jurnals.reverse()
        })
    }catch(err)
    {
        res.send(err);
    }
}

//get travel book by one by
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

    }catch (error) {
        console.log(error.message);
    }
}

// POST add new travel book
const addJurnal = async (req, res)=>{
    console.log(req.file)
 //   const {title, text, file, order_number}=req.body;
    const title=req.body.title;
    const text=req.body.text;
    const file=req.files.file;
    const order_number=req.body.order_number;

    try {
       await Jurnal.create({title:title, text:text, file:file, order_number:order_number});
        res.status(201).json({msg: "Product Created Successfuly", Jurnal});
    }catch (error) {
        console.log(error.message);
    }
}

//PUT method edit
const updateJurnal=async (req, res)=>{
    try {
        const {title, text, date, status, author, file, order_number}=req.body;
        const updateJurnal=await Jurnal.findOne({
            where:{
                id : req.params.id,
                title:title,
                text:text,
                file:file,
                order_number:order_number
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
const deleteJurnal=async (req, res)=>{
    try {
       await Jurnal.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({
            message: 'deleted!',
        })
    }
    catch (error){
        console.log(error.message);
    }
}

module.exports={
    getAllJurnals,
    getJurnalById,
    addJurnal,
    updateJurnal,
    deleteJurnal
}