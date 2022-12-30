const SavingAccountTxn_Repo=require('../Database/Repository/SavingAccountTxn_Repo');
const { logger } = require("../Util/logeer");

exports.DepositInAccount=async(depositeJson)=>{

const getdata=await SavingAccountTxn_Repo.DepositInAccountByAccountNumber(depositeJson);
logger.info(`get the data form Repo  of DepositInAccountByAccountNumber ${getdata} `)
return getdata;
}