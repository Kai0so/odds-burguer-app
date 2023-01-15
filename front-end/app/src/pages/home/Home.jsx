import React from 'react';
import { Title, HomeTemplate, RegisterButton, LoginButton, Subtitle } from '../../Components';

function Home() {
  return (
    <div>
      <HomeTemplate />
      <Title />
      <Subtitle />
      <LoginButton />
      <RegisterButton />
    </div>
  );
}

export default Home;