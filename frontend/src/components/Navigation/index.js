// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser}>Profile</ProfileButton>
    );
  } else {
    sessionLinks = (
      <>
        <Link to='/login' className="clearButtons" >
          <i className="fas fa-feather">
            <div className='clearButtonsText'>Login</div>
          </i>
        </Link>
        <Link to='/signup' className="clearButtons" >
          <i className="fas fa-feather-alt">
            <div className='clearButtonsText'>Signup</div>
          </i>
        </Link>
      </>
    );
  }

  return (
    <nav>
      <div className='left-nav'>
        <NavLink exact to="/">
          <button className="clearButtons homeButton">
            <i className="fas fa-dungeon soloButtons"></i>
          </button>
        </NavLink>
      </div>
      <div className='center-nav'>
        SkyrimINN
      </div>
      <div className='right-nav'>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
