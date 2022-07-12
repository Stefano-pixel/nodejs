const express = require('express');
const router = new express.Router
const User = require('../mongoose/User');
const auth = require('../middleware/auth')

router.get('/users', auth, async(req, res, next) =>{
    res.send(req.user)
})

router.post('/user', async(req, res, next)=>{ 
    try{
        const user = new User({
            user: req.body.user,
            email: req.body.email,
            password: req.body.password
        })
        await user.save()
        res.status(201).json({user, token});
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
        const id = userFound._id;
        const token = await userFound.generateAuthToken()
        res.send({id, token})
    }catch(e){
        res.status(400).send(e);
    }
 })

 router.post('/user/logout', auth, async (req, res) =>{
     try {
        req.user.tokens = req.user.tokens.filter((token) => {
                return token.token !== req.token
        })
        await req.user.save()

        res.status(200).send()
     }catch(e){
        res.status(500).send()
     }
 })

module.exports = router;