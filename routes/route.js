const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Udit Jain is awesome!!!')
})

module.exports=router