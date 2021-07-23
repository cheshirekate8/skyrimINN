import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './InnPage.css'
import { useParams } from 'react-router';
import { getOneInn } from '../../store/inns';
import { newReservation } from '../../store/reservations';

import { Redirect } from 'react-router';
import { useHistory } from 'react-router';

function InnPageComponent() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneInn(id))
    }, [dispatch, id])

    const currentInn = useSelector(state => state.inns.currentInn);
    const currentUser = useSelector(state => state.session.user);

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const bookedTitle = document.getElementById('bookedTitle')

    let today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    today = year + '-' + month + '-' + day;

    //user_id, inn_id, start_date, end_date, price
    const HandleSubmit = async (e) => {
        e.preventDefault();

        const user_id = parseInt(currentUser.id, 10);
        const inn_id = currentInn.id;

        const payload = {
            user_id,
            inn_id,
            start_date: startDate,
            end_date: endDate,
            price: 50
        }

        dispatch(newReservation(payload))

        bookedTitle.innerHTML = 'Booked!!!'

        setTimeout(() => {
            history.push('/')
        }, 2000)
    }

    if (currentInn) {
        return (
            <div className='innDiv'>
                <h1 className='innTitle'>{currentInn?.name}</h1>
                <form
                    className='bookingForm'
                    onSubmit={HandleSubmit}
                >
                    <h2 id='bookedTitle'>Book Now!</h2>
                    <label className='bookingLabel'>
                        Start Date
                        <input
                            type="date"
                            value={startDate}
                            min={today}
                            onChange={(e) => { setStartDate(e.target.value); }} />
                    </label>
                    <label className='bookingLabel'>
                        End Date
                        <input
                            type="date"
                            value={endDate}
                            min={today}
                            onChange={(e) => { setEndDate(e.target.value) }} />
                    </label>
                    <div id='booking-button-div'>
                        {currentUser ? (
                            <button id='booking-button'>Confirm Booking</button>
                        ) : (
                            <p>Please Signup or Login to book with {currentInn?.name}</p>
                        )}
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <h1> Loading... </h1>
        )
    }
}

export default InnPageComponent;
