import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPasswordButton() {
  return (
    <div className="forgot-password-button">
      <h5>
        Esqueceu sua senha?
        {' '}
        <Link to="/">Clique aqui</Link>
      </h5>
    </div>
  );
}

export default ForgotPasswordButton;
