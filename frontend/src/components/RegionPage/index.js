import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
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
                    {innsList.map(inn => <div>{inn.name}</div>)}
                </h1>
            </div>
        )
    } else {
        return null
    }
}

export default InnsFromRegionComponent;
