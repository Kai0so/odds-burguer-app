import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate('/login')}>Entrar</button>
    </div>
  );
}
export default LoginButton;
