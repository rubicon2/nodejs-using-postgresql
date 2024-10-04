#! /user/bin/env node

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES 
  ('Jeff'),
  ('Abed'),
  ('Troy'),
  ('Britta');
`;

async function main() {
  try {
    const connectionString = process.argv[2];
    if (!connectionString) throw new Error('No db uri specified');
    console.log('Initializing database...');
    const client = new Client({
      connectionString,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('Done');
  } catch (error) {
    console.error(error.message);
  }
}

main();
