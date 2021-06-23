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

router.get(
    '/user/:id',
    asyncHandler(async (req, res) => {
      const reservations = await Reservation.findAll({
        where: {
          user_id: req.params.id
        }
      });
      return res.json(reservations)
    }),
  )

router.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const reservations = await Reservation.findByPk(req.params.id);
      return res.json(reservations)
    }),
  )

router.post(
  '/',
  asyncHandler(async(req,res) => {
    const {user_id, inn_id, start_date, end_date, price} = req.body;
    const reservation = await Reservation.create({user_id, inn_id, start_date, end_date, price});
    return res.json({
      reservation,
    })
  })
)

module.exports = router;
