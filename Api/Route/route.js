// const { Router } = require("express");
const playercontroller=require('../Controller/playercontroller')
const SavingAccountTxn=require('../Controller/SavingAccountTxn_Controller');


module.exports=(Router)=>{
    // console.log("hello",playercontroller.getplayer)
  Router.get('/player',playercontroller.getplayer)


  //Saving & Register
  Router.post('./SavingInAccount',SavingAccountTxn.DepositInAccount)


}