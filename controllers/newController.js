function newGet(req, res) {
  console.log('Display form to user - WIP');
  res.render('usernameForm', { title: 'New Username' });
}

function newPost(req, res) {
  console.log('username to be saved :', req.body.username);
  res.send('Accept form data!');
}

module.exports = {
  newGet,
  newPost,
};
