const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Post.findAll({
    include: [
      {
        model: Comment,
        as: "comments",
        attributes: ["id", "comment_body", "user_id"],
      },
    ],
  })
    .then((PostData) => {
      res.json(PostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
        as: "comments",
        attributes: ["id", "comment_body", "user_id"],
      },
    ],
  })
    .then((PostData) => {
      res.json(PostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post_body: req.body.post_body,
    user_id: req.session.user_id,
  })
    .then((PostData) => {
      res.json(PostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post_body: req.body.post_body,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((PostData) => {
      res.json(PostData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  })
    .then((PostData) => {
      if (!PostData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
      }
      res.status(200).json(PostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
