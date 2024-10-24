const {
  deleteUser,
  deleteAllUsers,
} = require('../controllers/deleteController');
const { Router } = require('express');

const appRouter = new Router();

appRouter.get('/', deleteAllUsers);
appRouter.get('/:id', deleteUser);

module.exports = appRouter;
