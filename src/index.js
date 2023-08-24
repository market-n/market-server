const express = require("express");
const config = require("./shared/config");
const cors = require("cors");
const db = require("./db");
const app = express();
// middleware 
app.use(express.json())
app.use(cors());
// import router
const adminRoute = require("./modules/admin/_api");

// middleware router
app.use(adminRoute);

// DATABAZAGA ULANISH
db();

app.listen(config.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT:${config.port}`);
});
