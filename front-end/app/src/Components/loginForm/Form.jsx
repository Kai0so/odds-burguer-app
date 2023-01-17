import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <input type="email" placeholder="Digite seu E-mail" onChange={(e) => handleEmailChange(e)} value={email} />
      <input type="password" onChange={(e) => handlePasswordChange(e)} />
      <button type="button">Entrar</button>
    </div>
  );
}

export default Form;
