const express = require('express')
const router = express()

router.get('/',async(req,res)=>{
    res.send('OK')
})

router.listen(3000)
console.log('Listening on port 3000...')

module.exports= router