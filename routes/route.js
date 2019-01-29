const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Slack notifications must be working!!!')
})

module.exports=router