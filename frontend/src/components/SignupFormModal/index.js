// frontend/src/components/SignupFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="clearButtons" onClick={() => setShowModal(true)}>
      <i className="fas fa-feather-alt">
        <div className='clearButtonsText'>Signup</div></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
