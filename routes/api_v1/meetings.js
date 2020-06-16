const express = require('express');
const router = express.Router();
const db=require('../../db')

router.post('/new',(req,res)=>{
    db.actions.meetings.newMeeting(req.body.description,req.body.scheduled_on,req.body.remarks,req.body.gram_panchayat,req.body.village,req.body.video_name,req.body.start_time,req.body.end_time,function(err,data){
        if(err){
            res.status(500).send({
                success: false
                , code: "500"
                , error: {
                  message: "Could not create meeting"
                }
              })
        }
        else{
            res.status(200).send({success: true, data: data}); 
        }
    })
})
router.get('/meetings',(req,res)=>{
    db.actions.meetings.getMeeting(function(err,data){
        if(err){
            res.status(500).send({
                success: false
                , code: "500"
                , error: {
                  message: "Could not find meeting"
                }
              })

        }
        else{
            res.status(200).send({success: true, data: data});  
        }
    })
})
exports=module.exports=router