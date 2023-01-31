const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqueID = require("uniqid");

// route to post posts
router.post("/posts", (req, res) => {
    let postID = uniqueID();
    const postContent = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(postContent)
    console.log(postID);

    const newPost = {
        title: req.body.title,
        text: req.body.text, 
        id: postID,
    };
    postContent.push(newPost);
    fs.writeFileSync("./db/db.json", JSON.stringify(postContent));

});

//route to delete posts
router.delete('/posts/:id', (req, res) => {
    let savedPosts = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let postID= savedPosts.filter(x=>x.id!=req.params.id) 
fs.writeFileSync("./db/db.json", JSON.stringify(postID), (err) => {
    if (err) throw err;
});
return res.json(savedPosts);
});