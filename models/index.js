const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Comment, Post };
