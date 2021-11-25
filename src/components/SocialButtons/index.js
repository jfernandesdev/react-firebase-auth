import React from 'react';
import { Flex } from '../../pages/styles';
import Button from '../Button';

export const SocialButtons = () => {
  return (
    <Flex>
      <Button type='button' outlined>
        <img src='./google-icon.svg' alt='Entrar com o Google'/>
        Google
      </Button>

      <Button type='button' outlined>
        <img src='./facebook-icon.svg' alt='Entrar com o Facebook' />
        Facebook
      </Button>
    </Flex>
  );
}