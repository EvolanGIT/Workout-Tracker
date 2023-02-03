const sequelize = require('../config/connection');
const { User, Comments, Posts } = require('../models');

const userData = require('./userData.json');
const commentsData = require('./comment_seeds.json');
const postsData = require("./post_seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, 
    {
    individualHooks: true,
    returning: true,
    }
  );
  
  await Posts.bulkCreate(postsData, 
    {
    returning: true,
    }
  );

  await Comments.bulkCreate(commentsData, 
    {
    returning: true,
    }
  );



  process.exit(0);
};

seedDatabase();
