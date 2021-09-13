const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Inn, Reservation, Review } = require('../../db/models');

const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const inns = await Inn.findAll();
    return res.json(inns)
  }),
)

router.get(
  '/recent',
  asyncHandler(async (req, res) => {
    const inns = await Inn.findAll({ limit: 15, order: [['id', 'DESC']] });
    return res.json(inns)
  }),
  )

  router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
      const inn = await Inn.findByPk(req.params.id, {
        include: Reservation
      })
      return res.json(inn)
  }),
)

//GET ALL OF AN INNS RESERVATIONS
router.get(
    '/:id(\\d+)/avail',
    asyncHandler(async (req, res) => {
      const reservations = await Reservation.findAll({
        where: {
          inn_id: req.params.id
        }
      })
      return res.json(reservations)
  }),
)

module.exports = router;
