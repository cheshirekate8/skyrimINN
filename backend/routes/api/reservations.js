const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Reservation, Inn } = require('../../db/models')

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
        },
        include : Inn
      });
      return res.json(reservations)
    }),
  )

router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
      const reservations = await Reservation.findByPk(req.params.id, {
        include: Inn
      });
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

router.put(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const reservationId = parseInt(req.params.id, 10);
    const reservation = await Reservation.findByPk(reservationId);
    const { start_date, end_date } = req.body;

    if (reservation) {
      await reservation.update({start_date: start_date, end_date: end_date})
      return res.json({reservation});
    } else {
      const reservationNotFoundError = (reservationId) => {
        const error = new Error("Reservation Not Found");
        error.status = 404;
        return error
      }
      next(reservationNotFoundError(reservationId))
    }
  }),
);

router.delete(
  '/:id(\\d+)',
  asyncHandler(async(req,res,next) => {
    const reservationId = parseInt(req.params.id, 10);
    const reservation = await Reservation.findByPk(reservationId);

    if (reservation) {
      await reservation.destroy();
      return res.json(reservation)
    } else {
      const reservationNotFoundError = (reservationId) => {
        const error = new Error("Reservation Not Found");
        error.status = 404;
        return error
    }
    next(reservationNotFoundError(reservationId));
    }
  })
)

module.exports = router;
