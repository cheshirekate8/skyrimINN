import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInns, getOneInn } from '../../store/inns';
import { getReservationsFromUserId } from '../../store/reservations';
import './MyReservations.css'

function MyReservationsComponent() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getReservationsFromUserId(currentUser?.id))
    }, [dispatch])

    useEffect(() => {
        dispatch(getInns())
    }, [dispatch])

    const reservations = useSelector(state => state.reservations.list)
    const inns = useSelector(state => state.inns)

    if (reservations !== undefined) {
        return (
            <div className='reservations-div'>
                <h2>My Reservations</h2>
                {reservations.length !== 0 ? (

                        reservations.map((reservation, i) => (
                            <div>
                                <h3>Reservation #{i + 1}</h3>
                                <li>Inn: {inns[reservation.inn_id].name}</li>
                                <li>Start of Stay: {reservation.start_date}</li>
                                <li>End of Stay: {reservation.end_date}</li>
                            </div>
                        ))

                ) : (
                    <h3>You have no bookings</h3>
                )}
            </div>
        )
    } else {
        return null
    }

}

export default MyReservationsComponent
