const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment_body: "Exciting first post!",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
