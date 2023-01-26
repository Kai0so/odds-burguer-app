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
      <form>
        <label htmlFor="userName">
          Nome:
          <input type="text" name="userName" id="userName" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="phone">
          Telefone:
          <input type="tel" name="phone" id="phone" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="password">
          Senha:
          <input type="password" name="password" id="password" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="role">
          Role:
          <select name="role" id="role" onChange={(e) => handleChange(e)}>
            <option disabled selected value>Selecione uma opção</option>
            <option>Usuário</option>
            <option>Administrador</option>
          </select>
        </label>
        <br />
        <button type="button">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterForm;
