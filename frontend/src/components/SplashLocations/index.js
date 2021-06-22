import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { getLocations } from '../../store/locations';
import './SplashLocations.css';
import SolitudeLandscape from '../../images/SolitudeLandscape.jpg'

const LocationsComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocations())
    }, dispatch)

    const locations = useSelector(state => state.locations.list)

    return (
        <div className='outerDiv'>
            <div className='left-div'>
                <h1>Make memories in New Cities!</h1>
                <ul>
                    {locations.map((location) => (<li>{location.name}</li>))}
                </ul>
            </div>
            <div className='right-div'>
                <img className='city' src={SolitudeLandscape}/>
            </div>
        </div>
    )
}

export default LocationsComponent;
