const express = require('express')
const router = new express.Router()
function sleep(miliseconds) {
    var currentTime = new Date().getTime();           
    while (currentTime + miliseconds >= new Date().getTime()) {}
}
router.get('/student', async(res, req) => {
    sleep(60000)
    console.log('get student')     
})

module.exports = router
