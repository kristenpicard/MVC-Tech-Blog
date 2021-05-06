const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

User.hasMany(Comment, {
  foreignKey: "user_id",
});
User.hasMany(Post, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Comment, Post };
