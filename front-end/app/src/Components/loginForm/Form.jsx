import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event, setInput) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="email" placeholder="Digite seu E-mail" onChange={(e) => handleChange(e, setEmail)} value={email} />
      <input type="password" onChange={(e) => handleChange(e, setPassword)} />
      <button type="button">Entrar</button>
    </div>
  );
}

export default Form;
