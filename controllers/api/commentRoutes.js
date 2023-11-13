const router = require('express').Router();
const Comment = require('../../models/Comment');

// route to create/add a comment using async/await
router.post('/', async (req, res) => {
  try { 
    const CommentData = await Comment.create({
    description: req.body.description,
    user_id: req.session.user_id,
    post_id: req.body.post_id,
  });
  // if the comment is successfully created, the new response will be returned as json
  res.status(200).json(CommentData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;