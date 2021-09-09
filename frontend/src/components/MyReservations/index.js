import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInns } from '../../store/inns';
import { clearCurrentRes } from '../../store/reservations';
import './MyReservations.css';
import { Link } from 'react-router-dom';
import { getReservationsFromUserId } from '../../store/reservations';

function MyReservationsComponent({ isLoaded }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInns());
        dispatch(clearCurrentRes())
    }, [dispatch])

    const inns = useSelector(state => state.inns)
    const reservations = useSelector(state => state.reservations.list)
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getReservationsFromUserId(user?.id));
    }, [dispatch, user])


    return isLoaded && (
        <div className='reservations-div'>
            <h2>My Reservations</h2>
            <div className='reservations-only'>

                {reservations.length > 0 ? (
                    reservations?.map((reservation, i) => (
                        <div
                            className='single-reservation'
                            value={reservation.id}>
                            <h3 className='reservation-headers'>Reservation #{i + 1}</h3>
                            <li>Inn: {reservation.Inn.name}</li>
                            <li>Start of Stay: {reservation?.start_date}</li>
                            <li>End of Stay: {reservation?.end_date}</li>
                            <li>Cost: {reservation.price} Septims</li>
                            <Link to={`/reservation/edit/${reservation.id}`} type="submit">Edit Reservation</Link>
                        </div>
                    ))
                ) : (
                    <p>You have no reservations!</p>
                )}
            </div>
        </div>
    )
}

export default MyReservationsComponent
