import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';

import UserRoute from './components/UserRoute';

import { auth } from './firebase';
import { setUser } from './redux/actions';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch(setUser(auth));
      } else {
        dispatch(setUser(null));
      }
    })
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <UserRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset-password" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
