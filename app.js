const express = require('express');
require('dotenv').config();

const newRouter = require('./routers/newRouter');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/new', newRouter);

app.get('/', (req, res) => {
  console.log('Usernames will be logged here - WIP');
  res.render('index', { title: 'Index' });
});

app.listen(PORT, () => console.log('Listening on port', PORT));
