const express = require("express");
const config = require("./shared/config")
const app = express();

app.listen(config.port,() =>{
    console.log(`SERVER HAS BEEN STARTED ON PORT:${config.port}`)
})