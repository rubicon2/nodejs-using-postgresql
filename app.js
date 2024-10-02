const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Initial commit!');
});

app.listen(PORT, () => console.log('Listening on port', PORT));
