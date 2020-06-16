/**
 * Created on 14/6/20.
 */

const express=require('express')
const path=require('path')
const app=express()
const SERVER_PORT=2020
const sequelize=require('./db/models').DATABASE

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api/v1',require('./routes/api_v1'))
// app.listen(SERVER_PORT,()=>{
//     console.log("servr started")
// })

sequelize.sync({force:true}).then(function () {
    console.log("Database Configured");
    
  })
  .catch((err)=>{
    console.log(err)
    })

    app.listen(SERVER_PORT,()=>{
        console.log("started the base")
    })