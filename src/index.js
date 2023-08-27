const express = require("express");
const config = require("./shared/config");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output");
const db = require("./db");
const path = require("path");
const app = express();

// import handleError
const handleError = require("./shared/errors/handle");

// public fayl'ni public qilish yo'li
app.use("/files", express.static(path.join(__dirname, "public")));

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
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(config.port, () => {
  console.log(`SERVER HAS BEEN STARTED ON PORT:${config.port}`);
});
