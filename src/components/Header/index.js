import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Flex, Button } from './styles';
import { Logo } from '../Logo';
import { InfoUser } from '../InfoUser';

import { logoutInitiate } from '../../redux/actions';

export const Header = () => {
  
  const { currentUser } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();

  const handleAuth = () => {
    if(currentUser) {
      dispatch(logoutInitiate());
    }
  };

  return(
    <Container>
        <Logo />

        <Flex>
          <InfoUser
            avatar='https://github.com/jfernandesdev.png'
            name= 'Jeferson'
            email='jfernandes.dev@gmail.com'
          />
          
          <Button onClick={handleAuth}>Sair</Button>
        </Flex>
    </Container>
  );
}