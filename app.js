const express = require('express');
require('dotenv').config();

const newRouter = require('./routers/newRouter');
const {
  getAllUsernames,
  deleteUsername,
  searchUsernames,
} = require('./db/queries');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/new', newRouter);

app.get('/', (req, res) => {
  const searchTerm = req.query.search;
  if (searchTerm) {
    searchUsernames(searchTerm).then((users) => {
      res.render('index', { title: 'User List', searchTerm, users });
    });
  } else {
    getAllUsernames().then((users) => {
      res.render('index', { title: 'User List', searchTerm, users });
    });
  }
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

// Error handling.
// eslint-disable-next-line no-unused-vars -- need all 4 arguments for this to be recognised as error handling function.
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.render('error', { title: 'Error', error });
});

app.listen(PORT, () => console.log('Listening on port', PORT));
