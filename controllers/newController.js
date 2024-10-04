const { insertUsername } = require('../db/queries');

function newGet(req, res) {
  res.render('usernameForm', { title: 'New Username' });
}

function newPost(req, res) {
  insertUsername(req.body.username).then(() => {
    res.status(303).redirect('/');
  });
}

module.exports = {
  newGet,
  newPost,
};
