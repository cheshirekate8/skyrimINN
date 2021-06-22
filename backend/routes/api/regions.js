const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Region, Inn } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res) => {
      const regions = await Region.findAll();
      return res.json(regions)
    }),
  )

router.get(
    '/:id/inns',
    asyncHandler(async (req, res) => {
      const regions = await Inn.findAll({
        where: {
            region_id: req.params.id
        }
    });
      return res.json(regions)
    }),
  )

module.exports = router;
