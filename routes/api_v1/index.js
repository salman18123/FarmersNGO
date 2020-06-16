const express = require('express');
const router = express.Router();

const meetings=require('./meetings')

router.use('/meeting',meetings);

exports=module.exports=router