import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
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

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        price = diffInDates * 10
      };

    let starterDate = new Date(startDate)
    let enderDate = new Date(endDate)
    let diffInDates = Math.ceil((enderDate - starterDate) / 1000 / 60 / 60 / 24)
    let price = 0;

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
            price: price
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
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date()}
                        monthsShown={2}
                        selectsRange
                        inline
                    />
                    <p> Price = {(diffInDates * 10) > 0 ? `${(diffInDates * 10)} Septims`: `Calculating...`}</p>
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
