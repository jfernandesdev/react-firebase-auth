import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RedirectToLogin = () => {
  const history = useHistory();
  history.push('/login')
  return <></>;
}

const UserRoute = ({children, ...rest}) => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Route {...rest} /> : <RedirectToLogin />;
}

export default UserRoute;