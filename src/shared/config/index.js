require("dotenv/config");

const config = {
  port: process.env.PORT,
  db:{
    host:process.env.DB_HOST,
    port:process.env.DB_PORT
  }
};

module.exports = config;
