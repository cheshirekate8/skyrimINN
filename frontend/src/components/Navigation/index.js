// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
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
        <LoginFormModal />
        <SignupFormModal />
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
