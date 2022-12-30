var pg = require("pg");
const { Pool } = require("pg");

const { logger } = require("../Util/logeer");
require("dotenv").config();

var conString = process.env.ELEPHANTSQL_URL;
console.log("url", conString);
exports.dbConnection = async () => {
  try {
    const pool = new Pool({
      connectionString: conString,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    });
    let client = pool.connect();
    return client;
  } catch (err) {
    logger.error(`got the err while connecting database:${err}`);
  }
};

exports.ExtractQuerry = async (con, queryString) => {
  try {
    let data = await con.query("SELECT * from players");
    con.release();
    logger.info(`Get the data for Querry:${queryString}}`);
    logger.info(`the Data got :${data}}`);
    return data;
  } catch (err) {
    logger.error(`got the err while Extracting the data from Database:${err}`);
    return err;
  }
};
