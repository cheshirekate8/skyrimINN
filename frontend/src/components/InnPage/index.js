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

        history.push('/')

    }

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
                    onChange={(e) => {
                        setStartDate(e.target.value);
                        console.log('START DATE ========> ', e.target.value)}} />
                </label>
                <label className='bookingLabel'>
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
