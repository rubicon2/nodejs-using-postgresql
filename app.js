const express = require('express');
require('dotenv').config();

const newRouter = require('./routers/newRouter');
const { getAllUsernames, deleteUsername } = require('./db/queries');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/new', newRouter);

app.get('/', (req, res) => {
  getAllUsernames().then((users) => {
    res.render('index', { title: 'User List', users });
  });
});

app.get('/:id/delete', (req, res) => {
  deleteUsername(req.params.id).then(() => {
    res.status(303).redirect('/');
  });
});

// 404.
app.use((req, res) => {
  res.render('404', { title: '404 - Page not found' });
});

app.listen(PORT, () => console.log('Listening on port', PORT));
