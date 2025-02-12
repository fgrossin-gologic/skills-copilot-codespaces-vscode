// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments array
const comments = require('./comments');

// Create GET route for '/comments'
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});