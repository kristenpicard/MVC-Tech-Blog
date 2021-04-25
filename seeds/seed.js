const sequelize = require("../config/connection");
const seedComment = require("./commentSeed");
const seedPost = require("./postSeed");
const seedUser = require("./userSeed");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  process.exit(0);
};

seedAll();
