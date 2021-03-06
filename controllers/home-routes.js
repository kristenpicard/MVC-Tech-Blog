const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, Comment, User } = require("../models");

// GET all POSTS for homepage
router.get("/", async (req, res) => {
  try {
    const PostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "user_id",
            "post_id",
            "comment_body",
            "created_at",
          ],
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
      ],
    });

    const posts = PostData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one POST
router.get("/post/:id", async (req, res) => {
  try {
    const PostData = await Post.findByPk(req.params.id, {
      attributes: ["id", "post_body", "title", "created_at"],

      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "user_id",
            "post_id",
            "comment_body",
            "created_at",
          ],
          include: [
            {
              model: User,
              attributes: ["name"],
            },
          ],
        },
      ],
    });

    const post = PostData.get({ plain: true });
    res.render("one-post", { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;

// Sign up route
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

module.exports = router;
