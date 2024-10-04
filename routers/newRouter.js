const { newGet, newPost } = require('../controllers/newController');
const { Router } = require('express');

const appRouter = Router();

appRouter.get('/', newGet);
appRouter.post('/', newPost);

module.exports = appRouter;
