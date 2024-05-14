// create web server
// create a new express server
const express = require('express');
const app = express();

// create a new comment array
const comments = [
  { username: 'alice', comment: 'I love your blog!', createdAt: new Date() },
  { username: 'bob', comment: 'Good post', createdAt: new Date() },
];

// add a new comment
app.post('/comments', (req, res) => {
  const newComment = {
    username: req.body.username,
    comment: req.body.comment,
    createdAt: new Date()
  };
  comments.push(newComment);
  res.json(newComment);
});

// get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});