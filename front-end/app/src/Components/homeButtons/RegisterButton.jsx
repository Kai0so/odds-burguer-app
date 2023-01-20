import React from 'react';
import { Link } from 'react-router-dom';

function RegisterButton() {
  return (
    <div>
      <h5>
        Não tem uma conta?
        {' '}
        <Link to="/register">Registre-se</Link>
      </h5>
    </div>
  );
}

export default RegisterButton;
