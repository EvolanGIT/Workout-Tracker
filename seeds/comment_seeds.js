const {comment, Comments} = require("../models");

const commentsData =[
  {
    firstName: "John",
    lastName: "Doe",
    comment: "You can do better,keep going!"
  },
  {
    firstName: "Sarah",
    lastName: "AppleTree",
    comment: "Great job!"
  },
  {
    firstName: "Sam",
    lastName: "Smith",
    comment: "Do better next time!"
  }
]
const seedComments = () => Comments.bulkCreate(commentsData)
module.exports = seedComments;