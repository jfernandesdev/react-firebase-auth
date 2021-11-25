import React from 'react';
import { Flex } from '../../pages/styles';
import Button from '../Button';

export const SocialButtons = () => {
  
  const handleGoogleSignIn = () => {
    alert('Botão google clicado!');
  }

  const handleFacebookSignIn = () => {
    alert('Botão facebook clicado!');
  }

  return (
    <Flex>
      <Button type='button' outlined onClick={handleGoogleSignIn}>
        <img src='./google-icon.svg' alt='Entrar com o Google'/>
        Google
      </Button>

      <Button type='button' outlined onClick={handleFacebookSignIn}>
        <img src='./facebook-icon.svg' alt='Entrar com o Facebook' />
        Facebook
      </Button>
    </Flex>
  );
}