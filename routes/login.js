const { GetUsers,Testing} = require('../controllers/loginController')

const router=require('express').Router()

router.get('/',GetUsers)
router.get('/tetsing',Testing)

module.exports=router