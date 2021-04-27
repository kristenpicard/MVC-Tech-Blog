const { Comment } = require("../models");

const commentData = [
  {
    user_id: 0,
    post_id: 0,
    comment_body: "Exciting first post!",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
