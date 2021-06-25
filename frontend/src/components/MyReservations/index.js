import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInns } from '../../store/inns';
import './MyReservations.css'

function MyReservationsComponent({ isLoaded }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInns());
    }, [dispatch])

    const inns = useSelector(state => state.inns)
    const reservations = useSelector(state => state.reservations.list)

        return (
            <div className='reservations-div'>
                <h2>My Reservations</h2>
                {reservations?.map((reservation, i) => (
                    <div className='single-reservation'>
                        <h3 className='reservation-headers'>Reservation #{i + 1}</h3>
                        <li>Inn: {inns[reservation?.inn_id]?.name}</li>
                        <li>Start of Stay: {reservation?.start_date}</li>
                        <li>End of Stay: {reservation?.end_date}</li>
                    </div>
                ))}
            </div>
        )
}

export default MyReservationsComponent
