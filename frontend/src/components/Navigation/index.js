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
      <div class='left-nav'>
        <NavLink exact to="/">
          <button>
            <i class="fas fa-dungeon"> Home</i>
          </button>
        </NavLink>
      </div>
      <h2 class='center-nav'>SkyrimINN</h2>
      <div class='right-nav'>
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;
