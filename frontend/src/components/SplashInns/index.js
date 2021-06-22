import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { getRecentInns } from '../../store/inns';
import './SplashInns.css';

const InnsComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecentInns())
    }, dispatch)

    const recentInns = useSelector(state => state.inns.list)

    return (
        <div className='innsOuterDiv'>
            <h2 id='recentInnsTitle'>Check out the latest Inns!</h2>
                {recentInns.map((inn, i) => (<li id={`inn-${i+1}`}>{inn.name}</li>))}
        </div>
    )
}

export default InnsComponent;
