import React from 'react';
import { useSelector } from 'react-redux';
import { usePhotoContext } from '../../context/PhotoContext';
import './Splash.css'

function Splash({ isLoaded }) {
    const { photoUrl } = usePhotoContext()
    return (
        <div>
            <div height='50px'/>
            <img src={photoUrl} className='splashPhoto' />
        </div>
    )
}

export default Splash;
