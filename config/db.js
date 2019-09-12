const ENVIRONMENT = process.env.NODE_ENV || 'development';
if (ENVIRONMENT !== 'production') {
  require('dotenv').config();
}
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dbEnvConfig = require(`./${ENVIRONMENT}.ts`);

const dbConfiguration = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: dbEnvConfig.config.common.database.name
};

module.exports = dbConfiguration;
