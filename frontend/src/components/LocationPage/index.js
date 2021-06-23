import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { getInnsFromLocation } from '../../store/locations';
import './LocationPage.css'

function InnsFromLocationComponent() {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getInnsFromLocation(id));
    }, [dispatch])

    const innsList = useSelector(state => state.locations.innsList)

    if (innsList !== undefined) {
        return (
            <div className='region-div'>
                <h1>
                    {innsList.map(inn => <Link to={`/inns/${inn.id}`}>{inn.name}</Link>)}
                </h1>
            </div>
        )
    } else {
        return null
    }
}

export default InnsFromLocationComponent;
