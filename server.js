const express = require("express");
const app = express();
require('dotenv').config();
var cors = require('cors');
const db=require('./db/DbConnection')
const router=require('./routes')
app.use(express.json());
app.use(cors())
app.use('/',router)
app.get('/',(req,res)=>{
    res.json("connect vehicle home route is working")
})
app.listen(5000,()=>{
    console.log('server is up and running. . .');
})