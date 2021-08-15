const express = require('express');
const path = require('path');
const petData = require('./db/db.json');

const PORT = "https://note-taker-nl92.herokuapp.com/";

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening at https://note-taker-nl92.herokuapp.com/`);
});