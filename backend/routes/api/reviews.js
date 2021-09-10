const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Reservation, Inn, Review } = require('../../db/models')

const router = express.Router();

//GET ALL REVIEWS
router.get(
    '/',
    asyncHandler(async (req, res) => {
      const reviews = await Review.findAll();
      return res.json(reviews)
    }),
  )

//GET ALL OF AN INNS REVIEWS
router.get(
    '/inn/:id',
    asyncHandler(async (req, res) => {
      const reviews = await Reservation.findAll({
        where: {
          inn_id: req.params.id
        },
        include : Inn
      });
      return res.json(reviews)
    }),
  )

//GET A SPECIFIC REVIEW
router.get(
    '/:id(\\d+)',
    asyncHandler(async (req, res) => {
      const reviews = await Review.findByPk(req.params.id, {
        // include: {
        //   model: Reservation,
        //   include: Inn
        // }
        include: Inn
      });
      return res.json(reviews)
    }),
  )

//POST A REVIEW
router.post(
  '/',
  asyncHandler(async(req,res) => {
    const {user_id, inn_id, reservation_id, rating, comment} = req.body;
    const review = await Review.create({user_id, inn_id, reservation_id, rating, comment});
    return res.json({
      review,
    })
  })
)

//EDIT A REVIEW
router.patch(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const review_id = parseInt(req.params.id, 10);
    const review = await Review.findByPk(review_id);
    const { rating, comment} = req.body;

    if (review) {
      await review.update({rating, comment})
      return res.json(review);
    } else {
      const reservationNotFoundError = (review_id) => {
        const error = new Error("Review Not Found");
        error.status = 404;
        return error
      }
      next(reservationNotFoundError(review_id))
    }
  }),
);

//DELETE A REVIEW
router.delete(
  '/:id(\\d+)',
  asyncHandler(async(req,res,next) => {
    const review_id = parseInt(req.params.id, 10);
    const review = await Review.findByPk(review_id);

    if (review) {
      await review.destroy();
      return res.json(review)
    } else {
      const reviewNotFoundError = (review_id) => {
        const error = new Error("Review Not Found");
        error.status = 404;
        return error
    }
    next(reviewNotFoundError(review_id));
    }
  })
)

module.exports = router;
