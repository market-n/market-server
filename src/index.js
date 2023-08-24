const express = require("express");
const config = require("./shared/config");
const cors = require("cors");
const db = require("./db");
const app = express();

// import handleError
const handleError = require("./shared/errors/handle");

// middleware
app.use(cors());
app.use(express.json());

// import router
const adminRoute = require("./modules/admin/_api");

// middleware router
app.use(adminRoute);

// DATABAZAGA ULANISH
db();

// Middleware Error
app.use(handleError);

app.listen(config.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT:${config.port}`);
});
