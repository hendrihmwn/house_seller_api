const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = Joi.object()
  .keys({
    })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  db: {
    host: envVars.DATABASE_HOST,
    database: envVars.DATABASE_DB,
    user: envVars.DATABASE_USER,
    password: envVars.DATABASE_PASSWORD,
    port: envVars.DATABASE_PORT,
  },
};
