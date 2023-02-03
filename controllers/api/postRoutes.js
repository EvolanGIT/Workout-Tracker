const path = require("path");
const uniqueID = require("uuid");
const { User, Post, Comment } = require("../../models/User"); 
const withAuth = require('../../utils/auth');


// route to post posts
// 3001/api/posts
// get all posts for dashboard


//insert get
// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'post_title',
      'post_text',
      'user_id',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'user_name', 'comment', 'post_id'],
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
    .then(dbPostData => res.json(dbPostData))
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
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
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


// put to update current weight in db
router.put('/current_weight', withAuth, (req, res) => {
  Post.current_weight({ ...req.body, user_id: req.session.user_id }, { User })
    .then(updatedUserData => res.json(updatedUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;