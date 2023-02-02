const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password', 'first_name', 'last_name', 'current_weight', 'goal_weight'] },
      order: [['email', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('login', 
    {users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get("/userdata", async (req, res) => {
  // If a session exists, redirect the request to the homepage
  try {
    // change to User.findOne() or User.findByPk()
  const userdata = await User.findAll()
//console.log(userdate)

// if using findOne() or findByPk() use:
//const userTest = userData.get({plain: true})
  const userTest = userdata.map(user => user.get({plain : true}))
console.log(userTest)

  res.render("userdata.handlebars", {userTest});
  } catch (err) {
    if (err) throw (err)
  }
  
});
module.exports = router;
