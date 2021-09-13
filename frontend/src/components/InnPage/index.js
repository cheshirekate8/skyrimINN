import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './InnPage.css'
import { useParams } from 'react-router';
import { getOneInn } from '../../store/inns';
import { getReviewsFromInnId } from '../../store/reviews';
import reservationsReducer, { newReservation } from '../../store/reservations';
import { useHistory } from 'react-router';
import { csrfFetch } from '../../store/csrf';
import ReviewsComponent from '../ReviewsComponent';


function InnPageComponent() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneInn(id))
        dispatch(getReviewsFromInnId(id))
    }, [dispatch, id])

    const currentInn = useSelector(state => state.inns.currentInn);
    const currentUser = useSelector(state => state.session.user);
    const reviews = useSelector(state => state.reviews.list);

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

        price = diffInDates * currentInn.price

        const payload = {
            user_id,
            inn_id,
            start_date: startDate,
            end_date: endDate,
            price: price
        }

        console.log(payload)

        dispatch(newReservation(payload))

        bookedTitle.innerHTML = 'Booked!!!'

        setTimeout(() => {
            history.push('/')
        }, 2000)
    }

    let dateArray = [];

    currentInn?.Reservations?.forEach(reservation => {

        let start = new Date(reservation.start_date)
        let end = new Date(reservation.end_date)

        while (start <= end) {
            dateArray.push(start)
            start = new Date(start.setDate(start.getDate() + 1))
        }

    })

        let ratingsArray = [];

        reviews.forEach(review => {
            ratingsArray.push(review.rating)
        })



    if (currentInn) {
        return (
            <div className='innDiv'>
                <h1 className='innTitle'>{currentInn?.name}</h1>
                <h3>Rating : {ratingsArray.length > 0 ? ratingsArray.reduce((a, b) => a + b) / ratingsArray.length : 'No Reviews Yet'}</h3>
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
                        excludeDates={dateArray}
                        selectsRange
                        inline
                    />
                    <p> Price = {(diffInDates * 10) > 0 ? `${(diffInDates * 10)} Septims` : `Calculating...`}</p>
                    <div id='booking-button-div'>
                        {currentUser ? (
                            <button id='booking-button'>Confirm Booking</button>
                        ) : (
                            <p>Please Signup or Login to book with {currentInn?.name}</p>
                        )}
                    </div>
                </form>
                {reviews && reviews.map(review => (
                    <div className="singleReview">
                        <ul>
                            <li>User: { review.User.username}</li>
                            <li>Rating: {review.rating}</li>
                            <li>{review.comment}</li>
                        </ul>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <h1> Loading... </h1>
        )
    }
}

export default InnPageComponent;
