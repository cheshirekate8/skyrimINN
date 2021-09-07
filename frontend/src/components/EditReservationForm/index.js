import './EditReservation.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneReservation, newReservation } from '../../store/reservations';
import { getOneInn } from '../../store/inns';
import { cancelReservation, updateReservation } from '../../store/reservations';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router';

function EditReservationForm() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    const currentUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getOneReservation(id))
    }, [dispatch, id]);

    const currentReservation = useSelector(state => state.reservations.currentReservation);

    const currentInn = currentReservation?.Inn

    const [startDate, setStartDate] = useState(currentReservation?.start_date)
    const [endDate, setEndDate] = useState(currentReservation?.end_date)

    const reservationTitle = document.getElementById('reservationTitle')

    let today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    today = year + '-' + month + '-' + day;

    const handleDelete = async (e) => {
        e.preventDefault();

        dispatch(cancelReservation(currentReservation?.id))

        reservationTitle.innerHTML = 'Canceled!!'

        setTimeout(() => {
            history.push('/')
        }, 2000)
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        dispatch(updateReservation(currentReservation));

        // setTimeout(() => {
        //     history.push('/')
        // }, 2000)
    }

    return (
        <div id='reservationDiv'>
            <h1 id='reservationTitle'>Edit your reservation for {currentInn?.name}</h1>
            <form
                className='editBookingForm'
                onSubmit={HandleSubmit}
            >
                <label>Current Check in is {currentReservation?.start_date}</label>
                <label className='editBookingLabel'>
                    Start Date
                    <input
                        type="date"
                        value={startDate}
                        min={today}
                        onChange={(e) => { setStartDate(e.target.value); }} />
                </label>
                        <label>Current Check out is {currentReservation?.end_date}</label>
                <label className='editBookingLabel'>
                    End Date
                    <input
                        type="date"
                        value={endDate}
                        min={today}
                        onChange={(e) => { setEndDate(e.target.value) }} />
                </label>
                <div id='edit-booking-button-div'>
                    <button id='edit-booking-button'>Confirm Edit Reservation</button>
                </div>
            </form>
            <form onSubmit={handleDelete}>
                <button type="submit">Delete Reservation</button>
            </form>
        </div>
    )
}

export default EditReservationForm;
