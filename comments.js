// create web server
// create a server
const express = require('express');
const app = express();
// create a port
const port = 3000;

// import the comments from comments.js
const comments = require('./comments');

// create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// create a route
app.get('/comments', (req, res) => {
    res.send(comments);
});

// create a route
app.get('/comments/:commentId', (req, res) => {
    const commentId = req.params.commentId;
    const comment = comments.find(comment => comment.id === commentId);
    res.send(comment);
});

// start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Path: comments.js
// create a comments array
const comments = [
    {
        id: '1',