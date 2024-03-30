const router=require('express').Router()
const userRouter=require('./login')
const deviceRouter=require('./device')
router.use('/user',userRouter)
router.use('/device',deviceRouter)

module.exports=router