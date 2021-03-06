import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { getLocations } from '../../store/locations';
import './SplashLocations.css';
import SolitudeLandscape from '../../images/SolitudeLandscape.jpg'

const LocationsComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch])

    const locations = useSelector(state => state.locations.list)

    return (
        <div className='locationsOuterDiv'>
            <div className='locations-left-div'>
                <h1>Make memories in New Cities!</h1>
                {locations.map((location) => (<Link to={`locations/${location.id}`} key={location.id}>{location.name}</Link>))}
            </div>
            <div className='locations-right-div'>
                <img className='city' src={SolitudeLandscape}/>
            </div>
        </div>
    )
}

export default LocationsComponent;
