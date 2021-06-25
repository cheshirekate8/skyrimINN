import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInns } from '../../store/inns';
import './MyReservations.css';
import { Link } from 'react-router-dom';

function MyReservationsComponent({ isLoaded }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInns());
    }, [dispatch])

    const inns = useSelector(state => state.inns)
    const reservations = useSelector(state => state.reservations.list)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        // dispatch(cancelReservation(id))
    }

        return isLoaded && (
            <div className='reservations-div'>
                <h2>My Reservations</h2>
                {reservations.length > 0 ? (
                    reservations?.map((reservation, i) => (
                        <form
                        className='single-reservation'
                        onSubmit={handleSubmit}
                        value={reservation.id}>
                            <h3 className='reservation-headers'>Reservation #{i + 1}</h3>
                            <li>Inn: {inns[reservation?.inn_id]?.name}</li>
                            <li>Start of Stay: {reservation?.start_date}</li>
                            <li>End of Stay: {reservation?.end_date}</li>
                            <Link to={`/reservation/edit/${reservation.id}`} type="submit">Edit Reservation</Link>
                        </form>
                    ))
                ) : (
                    <p>You have no reservations!</p>
                )}
            </div>
        )
}

export default MyReservationsComponent
