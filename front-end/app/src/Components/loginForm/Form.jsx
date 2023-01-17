import React, { useState } from 'react';

function Form() {

  const [emailInput, setEmailInput] = useState('')

  const handleChange = (event) => {
    setEmailInput(event.target.value)
  }

  return (
    <div>
      <input type='email' placeholder='Digite seu E-mail' onChange={(e) => handleChange(e)} value={emailInput} />
      <input type='password' />
      <button type='button'>Entrar</button>
    </div>
  );
}

export default Form;