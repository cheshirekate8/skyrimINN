import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './InnPage.css'
import { useParams } from 'react-router';
import { getOneInn } from '../../store/inns';
import { newReservation } from '../../store/reservations';

function InnPageComponent({ isLoaded }) {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOneInn(id))
    }, [dispatch])

    const currentInn = useSelector(state => state.inns.currentInn);

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())


    //user_id, inn_id, start_date, end_date, price
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user_id = id;
        const inn_id = currentInn.id;

        const payload = {
            user_id,
            inn_id,
            startDate,
            endDate,
            price: 50
        }

        const reservation = dispatch(newReservation(payload))

        if (reservation) {
            const title = document.getElementById('bookedTitle');
            title.innerHTML = 'Booked!!'
        }

    }

    return (
        <div className='innDiv'>
            <h1>{currentInn?.name}</h1>
            <form
            onSubmit={handleSubmit}
            >
                <h2 id='bookedTitle'>Book Now!</h2>
                <label>
                    Start Date
                    <input
                    type="date"
                    value={startDate}
                    onChange={(e) => {setStartDate(e.target.value)}} />
                </label>
                <label>
                    End Date
                    <input
                    type="date"
                    value={endDate}
                    onChange={(e) => {setEndDate(e.target.value)}} />
                </label>
                <button>Confirm Booking</button>
            </form>
        </div>
    )
}

export default InnPageComponent;
