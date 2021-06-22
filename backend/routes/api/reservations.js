const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Reservation } = require('../../db/models')

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const reservations = await Reservation.findAll();
      return res.json(reservations)
    }),
  )


module.exports = router;
