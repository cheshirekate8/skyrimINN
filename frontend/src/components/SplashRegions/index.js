import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { getRegions } from '../../store/regions';
import './SplashRegions.css';
import parchmentMap from '../../images/ParchmentMap.jpg'

const RegionsComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRegions())
    }, [dispatch])

    const regions = useSelector(state => state.regions.list)

    return (
        <div className='regionsOuterDiv'>
            <div className='regions-left-div'>
                <img className='parchmentMap' src={parchmentMap} />
            </div>
            <div className='regions-right-div'>
                <h1>Rediscover the Regions of Skyrim...</h1>
                <ul>
                    {regions.map((region) => (<li>{region.name}</li>))}
                </ul>
            </div>
        </div>
    )
}


export default RegionsComponent;
