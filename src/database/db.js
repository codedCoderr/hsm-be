let mongoose = require('mongoose');
require('dotenv').config();
const { DATABASE_URL, TEST_DB } = process.env;
console.log(process.env.TEST_DB);
const connectionString =
  process.env.NODE_ENV === 'development' ? DATABASE_URL : TEST_DB;
class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    console.log(connectionString)
    mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
      })
      .then(() => {
        console.log('Database connected');
      })
      .catch(err => {
        console.error(err);
      });
  }
}

module.exports = new Database();
