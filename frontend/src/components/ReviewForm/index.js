import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from '../../store/reviews.js'
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { getOneReservation } from "../../store/reservations";

function ReviewForm() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneReservation(id))
    }, [dispatch, id]);

    const currentUser = useSelector(state => state.session.user);
    const currentReservation = useSelector(state => state.reservations.currentReservation);
    const currentInn = currentReservation?.Inn

    const [rating, setRating] = useState(null);
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();

        const review = {
            user_id: currentUser.id,
            inn_id: currentInn.id,
            reservation_id: currentReservation.id,
            rating: rating,
            comment: comment
        }

        dispatch(reviewActions.newReview(review))

        if (errors.length === 0) {
            history.push('/')
        }
    };

    // const handleDelete = (e) => {
    //     e.preventDefault();

    //     dispatch(reviewActions.deleteReview(id))
    // }

    return (
        <div className='edit-user-div'>
            <h2 id='edit-user-header'>Submit a Review for {currentReservation?.Inn?.name}</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Rating
                    <input
                        type="number"
                        min='1'
                        max='5'
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Comment
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit Review</button>
            </form>
            {/* <form onSubmit={handleDelete}>
                <button type="submit" id='deleteUserButton' >Delete User</button>
            </form> */}
        </div>
    );
}

export default ReviewForm;
