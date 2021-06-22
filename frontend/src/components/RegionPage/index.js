import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';
import { getInnsFromRegion } from '../../store/regions';
import './RegionPage.css'

function InnsFromRegionComponent() {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getInnsFromRegion(id))
    }, [dispatch])

    const innsList = useSelector(state => state.regions.innsList)

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

export default InnsFromRegionComponent;
