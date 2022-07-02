const express = require('express');
const router = new express.Router();
const db = require('../db/mongodb_driver');

//This get service returns all the universities stored in the db
router.get('/university', async(req, res, next)=>{
    try{
       //Fills the list: listUniversity, with all the objects
       //stored in the db
       const listUniversity = [];
       await db
             .getDb()
             .collection('universities')
             .find()
             .forEach(university => {
                                    listUniversity.push({
                                                        id: university.id,
                                                        name: university.name,
                                                        country: university.country
                                                        })
                                    });
        res.status(201).send(listUniversity)
    }catch(e){
       res.status(400).send(e);   
    }
})

//This post service stores all the new universities inserted 
//from the user
router.post('/university', async(req, res, next)=>{ 
   try{
       const listUniversity = req.body;
       console.log('POST---')
       console.log(listUniversity)
       await db
       .getDb()
       .collection('universities')
       .insertMany(req.body)
       res.status(200).json(listUniversity);
   }catch(e){
       res.status(400).send(e);
   }
})

//This patch service changes update the objects stored
// in the db
router.patch('/university', async(req, res, next)=>{ 
    try{
        //The list: listUniversity, contains lists with length = 2
        //the first element of every list is the old value the second
        //element of every list is the new value
        const listUniversity = req.body;
        for(const uni of listUniversity){
            console.log(uni[0].id)
            await db
            .getDb()
            .collection('universities')
            .replaceOne({id: uni[0].id}, uni[1])
        }
        res.status(200).json(listUniversity);
    }catch(e){
        res.status(400).send(e);
    }
 })
 
 //This delete service deletes all the universities passed
 router.delete('/university', async(req, res, next)=>{ 
    try{
        const listUniversity = req.body;
        for(const uni of listUniversity){
            await db
            .getDb()
            .collection('universities')
            .deleteMany(uni)
        }
        res.status(200).json(listUniversity);
    }catch(e){
        res.status(400).send(e);
    }
 })

module.exports = router