const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqueID = require("uniqid");
const User = require("../../models/User");

// route to post posts
// 3001/api/posts
router.post("/", (req, res) => {
    let postID = uniqueID();
    const postContent = JSON.parse(fs.readFileSync("./db/db_posts.json"));
    res.json(postContent)
    console.log(postID);

    const newPost = {
        title: req.body.title,
        text: req.body.text, 
        id: postID,
    };
    postContent.push(newPost);
    fs.writeFileSync("./db/db_posts.json", JSON.stringify(postContent));

});

// route to get posts
router.get("/posts", (req, res) => {
    const noteInfo = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(noteInfo)

});

//route to update the user's current weight in the db
router.put(‘/User/:current_weight’, function (req, res, next) {
    User.update(
      {title: req.body.current_weight},
      {returning: true, where: {id: req.params.id} }
    )
    .then(function([ rowsUpdate, [updatedBook] ]) {
      res.json(updatedBook)
    })
    .catch(next)
   })

//route to delete posts
router.delete('/:id', (req, res) => {
    let savedPosts = JSON.parse(fs.readFileSync("./db/db_posts.json", "utf8"));
    let postID= savedPosts.filter(x=>x.id!=req.params.id) 
fs.writeFileSync("./db/db_posts.json", JSON.stringify(postID), (err) => {
    if (err) throw err;
});
return res.json(savedPosts);
});


module.exports = router;