const pool = require('./pool');

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}

async function insertUsername(username) {
  // When passing the username in via the second argument's array, pg will take care of escaping the input.
  await pool.query(`INSERT INTO usernames (username) VALUES ($1)`, [username]);
}

module.exports = {
  getAllUsernames,
  insertUsername,
};
