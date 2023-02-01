const sequelize = require('../config/connection');
const { User, Comments, Posts } = require('../models');

const userData = require('./userData.json');
const commentsData = require('./commentsData.json');
const postsData = require("./postsData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, 
    {
    individualHooks: true,
    returning: true,
    }
  );

  await Comments.bulkCreate(commentsData, 
    {
    returning: true,
    }
  );

  await Posts.bulkCreate(postsData, 
    {
    returning: true,
    }
  );

  process.exit(0);
};

seedDatabase();
