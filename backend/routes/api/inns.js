const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Inn } = require('../../db/models');

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
      const inn = await Inn.findByPk(req.params.id)
      return res.json(inn)
  }),
)

module.exports = router;
