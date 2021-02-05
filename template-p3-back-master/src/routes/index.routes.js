const router = require('express').Router();
const userRouter = require('./user.routes.js');
const championsRouter = require('./champions.routes.js');

router.use('/user', userRouter);
router.use('/champions', championsRouter);

module.exports = router;