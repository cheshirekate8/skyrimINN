// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import SignupFormModal from '../SignupFormModal';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="clearButtons" onClick={() => setShowModal(true)}>
        <i className="fas fa-feather">
          <div className='clearButtonsText'>Login</div>
        </i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
