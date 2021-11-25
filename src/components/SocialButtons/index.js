import React from 'react';
import { Flex } from '../../pages/styles';
import Button from '../Button';

import googleIcon from './google-icon.svg';
import facebookIcon from './facebook-icon.svg';

export const SocialButtons = () => {
  return (
    <Flex>
      <Button type='button' outlined>
        <img src={googleIcon} alt='Entrar com o Google'/>
        Google
      </Button>

      <Button type='button' outlined>
        <img src={facebookIcon} alt='Entrar com o Facebook'/>
        Facebook
      </Button>
    </Flex>
  );
}