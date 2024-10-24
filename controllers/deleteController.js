const { deleteUsername, deleteAllUsernames } = require('../db/queries');

function deleteUser(req, res) {
  deleteUsername(req.params.id).then(() => {
    res.status(303).redirect('/');
  });
}

function deleteAllUsers(req, res) {
  deleteAllUsernames().then(() => {
    res.status(303).redirect('/');
  });
}

module.exports = {
  deleteUser,
  deleteAllUsers,
};
