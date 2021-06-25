import './EditReservation.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneReservation, newReservation } from '../../store/reservations';
import { getOneInn } from '../../store/inns';
import { cancelReservation } from '../../store/reservations';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router';

function EditReservationForm() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneReservation(id))
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getOneInn(id))
    }, [dispatch, id])

    const currentReservation = useSelector(state => state.reservations.currentReservation);
    const currentUser = useSelector(state => state.session.user);
    const currentInn = useSelector(state => state.inns.currentInn);

    // const [startDate, setStartDate] = useState(currentReservation?.start_date)
    // const [endDate, setEndDate] = useState(currentReservation?.end_date)

    const reservationDiv = document.getElementById('reservationDiv')

    const handleDelete = async (e) => {
        e.preventDefault();

        dispatch(cancelReservation(currentReservation?.id))

        reservationDiv.innerHTML = 'Canceled!!'

        setTimeout(() => {
            history.push('/')
        }, 2000)

    }

    return (
        <div>
            <h1 id='reservationDiv'>Your Reservation for {currentInn?.name}</h1>
            <form onSubmit={handleDelete}>
                <button type="submit">Delete Reservation</button>
            </form>
        </div>
    )
}

export default EditReservationForm;
