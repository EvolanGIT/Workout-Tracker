const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uniqueID = require("uuid");

// route to post comment
router.post("/comment", (req, res) => {
    let commentID = uniqueID();
    const Content = JSON.parse(fs.readFileSync("./db/db_comments.json"));
    res.json(commentContent)
    console.log(commentID);

    const newComment = {
        title: req.body.title,
        text: req.body.text, 
        id: commentID,
    };
    postContent.push(newComment);
    fs.writeFileSync("./db/db_comment.json", JSON.stringify(commentContent));

});

//route to delete comment
router.delete('/comment/:id', (req, res) => {
    let savedComment = JSON.parse(fs.readFileSync("./db/db_comment.json", "utf8"));
    let commentID= savedComment.filter(x=>x.id!=req.params.id) 
fs.writeFileSync("./db/db_comment.json", JSON.stringify(commentID), (err) => {
    if (err) throw err;
});
return res.json(savedComment);
});