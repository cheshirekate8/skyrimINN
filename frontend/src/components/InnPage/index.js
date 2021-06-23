import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './InnPage.css'
import { useParams } from 'react-router';
import { getOneInn } from '../../store/inns';

function InnPageComponent({isLoaded}) {
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getOneInn(id))
    }, [dispatch])

    const currentInn = useSelector(state => state.inns.currentInn)


    return (
        <div className='innDiv'>
            <h1>
                {currentInn?.name}
            </h1>
        </div>
    )
}

export default InnPageComponent;
