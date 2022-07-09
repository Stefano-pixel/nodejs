const express = require('express');
const router = new express.Router
const User = require('../mongoose/User');

router.get('/user', async(req, res) =>{
    try{
       const user = {
        user: req.query.user,
        email: req.query.email
       }
       var usersFound = await User.findOne(user).count();
       res.status(201).json(usersFound)
    }catch(e){
        res.status(400).send(e); 
    }
})

router.post('/user', async(req, res, next)=>{ 
    try{
        const user = new User({
            user: req.body.user,
            email: req.body.email,
            password: req.body.password
        })
        await user.save()
        res.status(200).json(user);
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
 })

 router.post('/user/login', async(req, res, next)=>{ 
    try{
        const user = {
            user: req.body.user,
            password: req.body.password
        }
        const userFound = await User.findOne(user);
        res.status(200).json(userFound);
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
 })

module.exports = router;