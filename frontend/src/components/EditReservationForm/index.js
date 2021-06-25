import './EditReservation.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneReservation, newReservation } from '../../store/reservations';
import { getOneInn } from '../../store/inns';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router';

function EditReservationForm () {
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneReservation(id))
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getOneInn(id))
    }, [dispatch, id])

    const currentReservation = useSelector(state => state.inns.currentReservation);
    const currentUser = useSelector(state => state.session.user);
    const currentInn = useSelector(state => state.inns.currentInn);

    const [startDate, setStartDate] = useState(currentReservation.start_date)
    const [endDate, setEndDate] = useState(currentReservation.end_date)


    return (
        <div className=''>
        </div>
    )
}

export default EditReservationForm;
