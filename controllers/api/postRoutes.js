const router = require("express").Router();
const path = require("path");
const uniqueID = require("uuid");
const { User, Post, Comment, Like } = require("../../models/User"); // not sure if we are creating a model for likes??
const withAuth = require('../../utils/auth');




// route to post posts
// 3001/api/posts
// get all posts for dashboard

router.get('/', withAuth (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_title',
        'post_text',
        'likes',
        'user_id',
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
  
        res.render('posts', {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //creates a post
  router.post('/', withAuth, (req, res) => {
    Post.create({
      id, //<-------------??
      post_title: req.body.post_title,
      post_text: req.body.post_text,
      likes, //<------------??
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  //for likes (probably needs more work) copy and repurpose to update current weight in db
  router.put('/like', withAuth, (req, res) => {
    Post.like({ ...req.body, user_id: req.session.user_id }, { Likes, Comment, User })
      .then(updatedlikeData => res.json(updatedlikeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //for deleting post
  router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  


module.exports = router;