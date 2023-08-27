const mongoose = require("mongoose");
const config = require("../shared/config");

// Collectionslarni import qilib olish.
// Bu joyda yozganimni sababi ko'p Collections ishlatilishi mumkin!
const User = require("../modules/users/Users");

  const uri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
