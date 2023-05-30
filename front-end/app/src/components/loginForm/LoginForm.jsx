import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event, setInput) => {
    setInput(event.target.value);
  };

  return (
    <form className="login-form">
      <input type="email" placeholder="E-mail ou CPF" onChange={(e) => handleChange(e, setEmail)} value={email} />
      <input type="password" placeholder="Senha" onChange={(e) => handleChange(e, setPassword)} value={password} />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
