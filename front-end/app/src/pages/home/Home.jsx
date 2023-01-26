import React from 'react';
import {
  Title, HomeTemplate, RegisterButton, LoginButton, Subtitle, OrderOptions,
} from '../../components';

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
