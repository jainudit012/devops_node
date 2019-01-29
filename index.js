const express = require('express')
const router = express()
const route=require('./routes/route')

router.use('/api',route)

const server = router.listen(3000,()=>{
    console.log('Listening on port 3000...')
    
})

module.exports= router