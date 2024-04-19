const express = require('express');
const app = express();
const path = require('path');

// Handle data from Backend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//path for public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Render ejs files
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("index")
});

app.get('/profile/:username', (req, res) => {
    res.send(`Welcome, ${req.params.username}`);
});

app.get('/author/:username/:age', (req, res) => {
  res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
});

app.listen(4000, function() {
  console.log("its running")
})