const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

router.put(
    '/:id(\\d+)',
    validateSignup,
    asyncHandler(async (req, res, next) => {
      const userId = parseInt(req.params.id, 10);
      const user = await User.findByPk(userId);
      const { email, password, username } = req.body;
      const hashedPassword = bcrypt.hashSync(password);

      if (user) {
        await user.update({email: email, hashedPassword: hashedPassword, username: username})
        return res.json({
          user,
      });
      } else {
        const userNotFoundError = (userId) => {
          const error = new Error("User Not Found");
          error.status = 404;
          return error
        }
        next(userNotFoundError(userId))
      }
    }),
);

router.delete(
  "/:id(\\d+)",
  asyncHandler(async(req,res,next) => {
    const userId = parseInt(req.params.id, 10);
    const user = await User.findByPk(userId);
      if (user) {
          await user.destroy()
          res.status(204).end();
      } else {
          const userNotFoundError = (userId) => {
              const error = new Error("Tweet Not Found");
              error.status = 404;
              return error
          }
          next(userNotFoundError(userId));
      }
  })
)

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.findAll();
    return res.json(users)
  }),
)



module.exports = router;
