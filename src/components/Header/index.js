import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Flex, Button } from './styles';
import { Logo } from '../Logo';
import { InfoUser } from '../InfoUser';

import { logoutInitiate } from '../../redux/actions';

import firebase from 'firebase/compat/app';

export const Header = () => {
  
  const { currentUser } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();

  const handleAuth = () => {
    if(currentUser) {
      dispatch(logoutInitiate());
    }
  };

  //get info user
  const loggedInUser = firebase.auth().currentUser;
  const displayName = loggedInUser.displayName ? loggedInUser.displayName : '';
  const email = loggedInUser.email ? loggedInUser.email : '';
  const photoURL = loggedInUser.photoURL ? loggedInUser.photoURL : '';
  
  return(
    <Container>
        <Logo />

        <Flex>
          <InfoUser
            avatar={photoURL}
            name= {displayName}
            email={email}
          />
          
          <Button onClick={handleAuth}>Sair</Button>
        </Flex>
    </Container>
  );
}