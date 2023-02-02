const { Post } = require("../models");

const postData = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "comment": "You can do better,keep going!"
    },
    {
        "firstName": "Sarah",
        "lastName": "AppleTree",
        "comment": "Great job!"
    },
    {
        "firstName": "Sam",
        "lastName": "Smith",
        "comment": "Do better next time!"
    }
];

const seedPosts = () => Post.bulkcreate(postData);
module.exports = seedPosts;