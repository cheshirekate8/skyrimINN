import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import * as innActions from "../../store/inns"
import './SplashInns.css';

const InnsComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(innActions.getInns())
        dispatch(innActions.getRecentInns())
        dispatch(innActions.clearCurrentInn())
    }, [dispatch])

    const recentInns = useSelector(state => state.inns.recentList)

    return (
        <div className='innsOuterDiv'>
            <h2 id='recentInnsTitle'>Check out the latest Inns!</h2>
                {recentInns.map((inn, i) => (<Link to={`inns/${inn.id}`} id={`inn-${i+1}`} className='innLink'key={inn.id}>{inn.name}</Link>))}
        </div>
    )
}

export default InnsComponent;
