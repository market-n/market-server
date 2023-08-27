const mongoose = require("mongoose");
const config = require("../shared/config");

// Collectionslarni import qilib olish.
// Bu joyda yozganimni sababi ko'p Collections ishlatilishi mumkin!
const User = require("../modules/users/Users");

const seedData = async () => {
  const uri = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log("error", err);
    });

  const seedDB = async () => {
    // Har bitta collectionsga malumot qo'shishdan oldin
    // o'sha collecttionni o'chirish kerek
    await User.deleteMany({});
    await User.insertMany();
  };

  seedDB().then(() => {
    mongoose.connection.close();
  });
};

seedData();
