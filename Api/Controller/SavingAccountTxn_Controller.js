const SavingAccountTxnService = require("../../services/SavingAccountTxn_Service");
const { logger } = require("../../Util/logeer");

exports.DepositInAccount = async (req, res) => {
  logger.info(`get data in the Deposite ${req.body}`);
  const depositeJson = req.body;
  const getData = await SavingAccountTxnService.DepositInAccount(depositeJson);
  return res.status(200).json({
    Status: {
      StatusCode: 200,
      StatusType: "Success",
      StatusMessage: "Record Found",
      StatusSeverity: "Information",
    },
    getData,
  });
 
};
