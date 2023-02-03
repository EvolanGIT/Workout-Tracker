const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqueID = require("uuid");
const User = require("../../models/User");

// route to post posts
// 3001/api/posts
// get all posts for dashboard

router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'post_title',
        'post_text',
        'likes',
        'user_id'
        'user_name',
        [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'likes']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id'],
          include: {
            model: User,
            attributes: ['user_name']
          }
        },
        {
          model: User,
          attributes: ['user_name']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
  
        res.render('dashboard', {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;