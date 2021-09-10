const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const innsRouter = require('./inns.js');
const regionsRouter = require('./regions.js')
const locationsRouter = require('./locations.js')
const reservationsRouter = require('./reservations.js')
const reviewsRouter = require('./reviews.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/inns', innsRouter);
router.use('/regions', regionsRouter);
router.use('/locations', locationsRouter)
router.use('/reservations', reservationsRouter)
router.use('/reviews', reviewsRouter)

module.exports = router;

// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
//   });

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     },
//   })
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );
