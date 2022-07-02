const express = require('express');
const router = new express.Router
const db = require('../db/mongodb_driver');

router.get('/user', async(req, res) =>{
    try{
       const user = {
        user: req.query.user,
        email: req.query.email
       }
       usersFound = await db.getDb().collection('users').find(user).count();
       res.status(201).json(usersFound)
    }catch(e){
        res.status(400).send(e); 
    }
})

router.post('/user', async(req, res, next)=>{ 
    try{
        const user = req.body;
        await db
        .getDb()
        .collection('users')
        .insertOne(user)
        res.status(200).json(user);
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
 })

 router.post('/user/login', async(req, res, next)=>{ 
    try{
        const user = req.body;
        console.log(user)
        const numberFound = await db.getDb().collection('users').find({
                                                                       user: user.user,
                                                                       password: user.password
                                                                    }).count();
        res.status(200).json(numberFound > 0);
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
 })

module.exports = router;