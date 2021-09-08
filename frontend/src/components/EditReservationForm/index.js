import './EditReservation.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getOneReservation, cancelReservation, updateReservation } from '../../store/reservations';
import { useHistory } from 'react-router';
import DatePicker from 'react-datepicker'

function EditReservationForm() {
    const dispatch = useDispatch()
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneReservation(id))
    }, [dispatch, id]);

    const currentUser = useSelector(state => state.session.user);
    const currentReservation = useSelector(state => state.reservations.currentReservation);
    const currentInn = currentReservation?.Inn

    const [startDate, setStartDate] = useState(currentReservation?.start_date)
    const [endDate, setEndDate] = useState(currentReservation?.end_date)

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        price = diffInDates * 10
      };

      let starterDate = new Date(startDate)
      let enderDate = new Date(endDate)
      let diffInDates = Math.ceil((enderDate - starterDate) / 1000 / 60 / 60 / 24)
      let price = currentReservation?.price;

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

        const user_id = parseInt(currentUser.id, 10);
        const inn_id = currentInn.id;

        price = diffInDates * 10

        const payload = {
            id: currentReservation.id,
            user_id,
            start_date: startDate,
            end_date: endDate,
            price: price
        }

        console.log(payload)

        dispatch(updateReservation(payload));

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
                {/* <label>Current Check in is {currentReservation?.start_date}</label>
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
                </label> */}
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
