const sequelize = require("../config/connection");
const seedComments = require("./commentseed");
const seedPost = require("./postData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPost();

  await seedUser();

  await seedComments();

  process.exit(0);
};

seedAll();
