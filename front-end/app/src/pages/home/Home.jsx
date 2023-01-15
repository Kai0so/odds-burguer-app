import React from 'react';
import { Title, HomeTemplate, RegisterButton, LoginButton, Subtitle, OrderOptions } from '../../Components';

function Home() {
  return (
    <div>
      <HomeTemplate />
      <Title />
      <Subtitle />
      <LoginButton />
      <RegisterButton />
      <OrderOptions />
    </div>
  );
}

export default Home;