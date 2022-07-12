const express = require('express');
const mongoose = require("mongoose");
const University = require("../mongoose/University"); 
const auth = require('../middleware/auth')

const router = new express.Router();

//This get service returns all the universities stored in the db
router.get('/university', auth, async(req, res, next)=>{
    try{
       //Fills the list: listUniversity, with all the objects
       //stored in the db
       const listUniversity = [];
       var userFound = await University.find({user: req.query.user})
       console.log(userFound)
       res.status(201).send(userFound)
    }catch(e){
       console.log('catch')
       res.status(400).send(e);   
    }
})

//This post service stores all the new universities inserted 
//from the user
router.post('/university', auth, async(req, res, next)=>{ 
   try{
       const listUniversity = req.body;
       await listUniversity.forEach(uniParam => {
         var uniToSave = new University({
            id: uniParam.id,
            name: uniParam.name,
            country: uniParam.country,
            user: new mongoose.Types.ObjectId(uniParam.user)
         })
         uniToSave.save();
       })
       res.status(200).json(listUniversity);
   }catch(e){
       res.status(400).send(e);
   }
})

// //This patch service changes update the objects stored
// // in the db
router.patch('/university', auth, async(req, res, next)=>{ 
    try{
        //The list: listUniversity, contains lists with length = 2
        //the first element of every list is the old value the second
        //element of every list is the new value
        const listUniversity = req.body;
        await listUniversity.forEach(uni => {
            University.updateOne({id: uni[0].id}, uni[1])
        })
        res.status(200).json(listUniversity);
    }catch(e){
        res.status(400).send(e);
    }
 })
 
 //This delete service deletes all the universities passed
 router.delete('/university', auth, async(req, res, next)=>{ 
    try{
        const listUniversity = req.body;
        await listUniversity.forEach((uni) => {
            University.deleteOne({ id: uni.id})
        })
        res.status(200).json(listUniversity)
    }catch(e){
        console.log(e)
        res.status(400).send(e);
    }
 })

module.exports = router