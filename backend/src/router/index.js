const express = require('express')
const router =express.Router()

router.get('/api/fof',(req,res)=>{
    res.status(200).json({
        message:"Jeja Bem vindo na api de fofoca ",
        author:'Ikaro',
        version:'1.1.0'
    })
})

module.exports =router