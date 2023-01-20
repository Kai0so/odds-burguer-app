import React, { useContext } from 'react';
import { RegisterContext } from '../../context';

function RegisterForm() {
  const { registerData, setRegisterData } = useContext(RegisterContext);

  const handleChange = (event) => {
    const inputName = event.target.name;
    setRegisterData({ ...registerData, [inputName]: event.target.value });
  };

  return (
    <div>
      <input type="text" name="userName" onChange={(e) => handleChange(e)} />
      <input type="number" name="age" onChange={(e) => handleChange(e)} />
      <input type="text" name="role" onChange={(e) => handleChange(e)} />
      <input type="email" name="email" onChange={(e) => handleChange(e)} />
      <input type="password" name="password" onChange={(e) => handleChange(e)} />
      <button type="button">Entrar</button>
    </div>
  );
}

export default RegisterForm;
