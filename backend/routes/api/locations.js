const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Location, Inn } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const locations = await Location.findAll();
      return res.json(locations)
    }),
  )

  router.get(
    '/:id/inns',
    asyncHandler(async (req, res) => {
      const locations = await Inn.findAll({
        where: {
            location_id: req.params.id
        }
    });
      return res.json(locations)
    }),
  )

  router.get(
    '/:id',
    asyncHandler(async (req, res) => {
      const location = await Location.findByPk(req.params.id);
      return res.json(location)
    }),
  )

module.exports = router;
