// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className='clearButtons' onClick={openMenu}>
        <i className="fas fa-dragon soloButtons"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li className='clearButtonsText'>{user.username}</li>
          <li className='clearButtonsText'>{user.email}</li>
          <li><Link to={`user/edit/${sessionUser.id}`}>Edit User</Link></li>
          <li>
            <button className='clearButtons logoutButton' onClick={logout}>
              <div className='clearButtonsText'>
                Log Out
              </div>
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
