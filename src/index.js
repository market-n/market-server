const express = require("express");
const config = require("./shared/config");
const db = require("./db");
const app = express();

// DATABAZAGA ULANISH 
db()

app.listen(config.port,() =>{
    console.log(`SERVER HAS BEEN STARTED ON PORT:${config.port}`)
})