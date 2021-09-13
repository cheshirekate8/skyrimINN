import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getReviewsFromInnId } from '../../store/reviews';
import { useHistory } from 'react-router';


function ReviewsComponent() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    const currentInn = useSelector(state => state.inns.currentInn);
    const reviews = useSelector(state => state.reviews.list);

    useEffect(() => {
        dispatch(getReviewsFromInnId(id))
    }, [dispatch, id])

    if (currentInn) {
        return (
            <>

            </>
        )
    }
}

export default ReviewsComponent;
