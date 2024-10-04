const pool = require('./pool');

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

async function insertUsername(username) {
  // When passing the username in via the second argument's array, pg will take care of escaping the input.
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

async function deleteUsername(id) {
  // When passing the username in via the second argument's array, pg will take care of escaping the input.
  await pool.query('DELETE FROM usernames WHERE id = $1', [id]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteUsername,
};
