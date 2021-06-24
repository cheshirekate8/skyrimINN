import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getInnsFromLocation, getOneLocation } from '../../store/locations';
import './LocationPage.css'

function InnsFromLocationComponent() {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getInnsFromLocation(id));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getOneLocation(id));
    }, [dispatch, id]);

    const innsList = useSelector(state => state.locations.innsList)
    const currentLocation = useSelector(state => state.locations.currentLocation)

    if (innsList !== undefined) {
        return (
            <div className='location-div'>
                <h1>The Inns Of {currentLocation?.name}</h1>
                    {innsList.map(inn => <Link to={`/inns/${inn.id}`}>{inn.name}</Link>)}
            </div>
        )
    } else {
        return null
    }
}

export default InnsFromLocationComponent;
