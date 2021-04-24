const { Post } = require("../models");

const postData = [
  {
    title: "Blog Post 1 Title",
    post_body: "This is the first post on this tech blog",
    user_id: 1,
  },
  {
    title: "Blog Post 2 Title",
    post_body: "This is the second post on this tech blog",
    user_id: 2,
  },
  {
    title: "Blog Post 3 Title",
    post_body: "This is the third post on this tech blog",
    user_id: 3,
  },
];
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
