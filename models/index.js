const User = require('./User');
const Comments = require('./Comments');
const Posts = require('./Posts');

Posts.belongsTo(User, {
    foreignKey:"user_id",
    onDelete: "cascade",

});

Posts.hasMany(Comments, {
    foreignKey: "post_id",
    onDelete: "cascade"
})

User.hasMany(Posts, {
    foreignKey:"user_id"
});

Comments.belongsTo(Posts, {
    foreignKey:"post_id",
    // onDelete: "cascade"
});

Comments.belongsTo(User, {
    foreignKey:"user_id",
    onDelete: "cascade"
});




module.exports = { User, Comments, Posts };




