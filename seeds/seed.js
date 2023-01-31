const sequelize = require('../config/connection');
const { User, Comments, Posts } = require('../models');

const userData = require('./userData.json');

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
    individualHooks: true,
    returning: true,
    }
  );

  await Posts.bulkCreate(postsData, 
    {
    individualHooks: true,
    returning: true,
    }
  );

  process.exit(0);
};

seedDatabase();
