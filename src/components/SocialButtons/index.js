import React from 'react';
import { useDispatch } from 'react-redux';
import { Flex } from '../../pages/styles';
import Button from '../Button';

import { googleSignInInitiate, facebookSignInInitiate } from '../../redux/actions';

export const SocialButtons = () => {
  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  }

  const handleFacebookSignIn = () => {
    dispatch(facebookSignInInitiate());
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