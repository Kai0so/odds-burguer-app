import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import RegisterContext from './RegisterContext';

function RegisterProvider({ children }) {
  const [registerData, setRegisterData] = useState({});

  const contextObject = useMemo(() => ({
    registerData, setRegisterData,
  }), [registerData, setRegisterData]);

  return (
    <RegisterContext.Provider value={contextObject}>
      {children}
    </RegisterContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default RegisterProvider;
