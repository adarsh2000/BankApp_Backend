const express= require('express');
const app=express();
const router= express.Router();
const bodyparser=require('body-parser')
const {dbConnection}=require('./Database/dbconnection')
// const router=require('./route')
const cors= require('cors')

app.use(bodyparser.urlencoded({
extended:true,
}))
app.use(bodyparser.json())
app.use(express.json())

require("./Api/Route/route")(router)
app.listen(8080,()=>{
    console.log("listen t 8080")
})
// app.use(Database)
// dbConnection();
app.use(router)

