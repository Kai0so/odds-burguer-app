import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterContext } from '../../context';
import oddsLogo from '../../assets/oddslogo2.png';

function RegisterForm() {
  const { registerData, setRegisterData } = useContext(RegisterContext);
  const navigate = useNavigate();

  useEffect(() => {
    setRegisterData({});
  }, []);

  const handleChange = (event) => {
    const inputName = event.target.name;
    setRegisterData({ ...registerData, [inputName]: event.target.value });
  };

  return (
    <div>
      <img src={oddsLogo} alt="Odds Logo" />
      <h2 className="form-title">
        Cadastre-se já e tenha acesso a ofertas exclusivas!
      </h2>
      <h4>Insira seus dados abaixo e comece a aproveitar.</h4>
      <form className="register-form">
        <label htmlFor="userName">
          Nome Completo *
          <br />
          <input type="text" name="userName" id="userName" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="cpf">
          CPF *
          <br />
          <input type="text" name="cpf" id="cpf" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="email">
          Endereço de e-mail *
          <br />
          <input type="email" name="email" id="email" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="phone">
          Celular (com DDD) *
          <br />
          <input type="tel" name="phone" id="phone" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="password">
          Senha *
          <br />
          <input type="password" name="password" id="password" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <label htmlFor="passwordConfirm">
          Confirme a senha *
          <br />
          <input type="password" name="passwordConfirm" id="passwordConfirm" onChange={(e) => handleChange(e)} />
        </label>
        <br />
        <div className="btn-container">
          <button className="cancel-form-button" type="button" onClick={() => navigate('/')}>Voltar</button>
          <br />
          <button className="register-form-button" type="button">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
