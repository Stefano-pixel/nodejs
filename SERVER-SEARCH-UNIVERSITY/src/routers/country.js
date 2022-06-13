const express = require('express')
const router = new express.Router()
const Country = require('../models/country')

router.get('/country', async(req, res)=>{
      res.header("Access-Control-Allow-Origin", "*");
      Country.find({}).then((countries)=>{       
            res.send(countries)
      }).catch((e)=>{
            res.status(500).send()
      })
})

router.post('/country', async(req, res)=>{
   const country = new Country({name: "Germany"})
   country.save().then(()=>{
         res.send(country)
   }).catch(()=>{
        res.status(400).send(e)
   })
})

module.exports = router