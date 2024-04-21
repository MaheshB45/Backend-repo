const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Handle data from Backend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//path for public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Render ejs files
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  fs.readdir(`./files`, function(err, files){
    //console.log(files);
    res.render("index", {files: files});
  })
});

app.get('/file/:filename', function(req, res) {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
    //console.log(filedata);
    res.render('show', {filename: req.params.filename, filedata: filedata});
  })
});

app.post('/create', function(req, res) {
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
    res.redirect("/");
  });
});

//Dynamic routing
// app.get('/profile/:username', (req, res) => {
//     res.send(`Welcome, ${req.params.username}`);
// });

// app.get('/author/:username/:age', (req, res) => {
//   res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
// });

app.listen(4000, function() {
  console.log("its running")
})