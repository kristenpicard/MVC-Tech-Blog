const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const PostData = await Post.findAll(req.session.user_id, {
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_body",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const posts = PostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      posts,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const PostData = await Post.findOne(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_body",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const post = PostData.get({ plain: true });
    res.render("edit-post", {
      post,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/create/", withAuth, async (req, res) => {
  try {
    const PostData = await Post.findAll(req.session.user_id, {
      include: [
        {
          model: Comment,
          attributes: [
            "id",
            "comment_body",
            "post_id",
            "user_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const posts = PostData.map((post) => post.get({ plain: true }));
    res.render("create-post", { posts, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
