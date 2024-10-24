const pool = require('./pool');

async function getAllUsernames() {
  try {
    const { rows } = await pool.query('SELECT * FROM usernames');
    return rows;
  } catch (error) {
    console.error(error);
  }
}

async function searchUsernames(searchTerm) {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM usernames WHERE username ~* $1`,
      [searchTerm],
    );
    return rows;
  } catch (error) {
    console.error(error);
  }
}

async function insertUsername(username) {
  try {
    // When passing the username in via the second argument's array, pg will take care of escaping the input.
    await pool.query('INSERT INTO usernames (username) VALUES ($1)', [
      username,
    ]);
  } catch (error) {
    console.error(error);
  }
}

async function deleteUsername(id) {
  try {
    // When passing the username in via the second argument's array, pg will take care of escaping the input.
    await pool.query('DELETE FROM usernames WHERE id = $1', [id]);
  } catch (error) {
    console.error(error);
  }
}

async function deleteAllUsernames() {
  try {
    await pool.query('DELETE FROM usernames');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllUsernames,
  searchUsernames,
  insertUsername,
  deleteUsername,
  deleteAllUsernames,
};
