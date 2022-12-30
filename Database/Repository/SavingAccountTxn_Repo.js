const DB = require("../dbconnection");
const {logger}=require('../../Util/logeer')

exports.DepositInAccountByAccountNumber=async(data)=>{

    console.log("get the data in the repo==");
    const client = await DB.dbConnection();
    logger(`the DB is Connected `)
    let query=``;
    let resultdata = await DB.ExtractQuerry(client, "SELECT * from players");
    logger(`the data is save ${resultdata}`);
  
    return resultdata;

    
}