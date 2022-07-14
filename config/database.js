const { Sequelize } = require('sequelize');
const { relations } = require('./relations');
const config = require('./config');
// without password / with blank password  
  // option examples
  const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    // the sql dialect of the database
    // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
    dialect: 'mysql',
  
    // custom host; default: localhost
    host: config.db.host,
    // for postgres, you can also specify an absolute path to a directory
    // containing a UNIX socket to connect over
    // host: '/sockets/psql_sockets'.
  
    // custom port; default: dialect default
    port: config.db.port,
  
    // custom protocol; default: 'tcp'
    // postgres only, useful for Heroku
    protocol: null,
  
    // disable logging or provide a custom logging function; default: console.log
    logging: msg => console.log(msg),
  
    // you can also pass any dialect options to the underlying dialect library
    // - default is empty
    // - currently supported: 'mysql', 'postgres', 'mssql'
    // dialectOptions: {
    //   socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    //   supportBigNumbers: true,
    //   bigNumberStrings: true
    // },
  
    // the storage engine for sqlite
    // - default ':memory:'
    // storage: 'path/to/database.sqlite',
  
    // disable inserting undefined values as NULL
    // - default: false
    omitNull: true,
  
    // a flag for using a native library or not.
    // in the case of 'pg' -- set this to true will allow SSL support
    // - default: false
    native: true,
  
    // Specify options, which are used when sequelize.define is called.
    // The following example:
    //   define: { timestamps: false }
    // is basically the same as:
    //   Model.init(attributes, { timestamps: false });
    //   sequelize.define(name, attributes, { timestamps: false });
    // so defining the timestamps for each model will be not necessary
    define: {
      underscored: false,
      freezeTableName: false,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      timestamps: true
    },
  
    // similar for sync: you can define this to always force sync for models
    sync: { force: true },
  
    // pool configuration used to pool database connections
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
    
    timezone:"+07:00"
  
    // isolation level of each transaction
    // defaults to dialect default
    // isolationLevel: Transaction.ISOLATION_LEVELS.REPEATABLE_READ
  });

const modelDefiners = require('../models').arrayModel;

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
relations(sequelize);

  module.exports = sequelize;