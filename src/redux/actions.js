import * as types from './actionTypes';
import { auth } from '../firebase';

// functions for registration
const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, name) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      user.updateProfile({
        name
      });
      dispatch(registerSuccess(user));
    })
    .catch((error) => {
      dispatch(registerFail(error.message));
      alert(error.message);
    });
  }
} 

// functions for login
const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
      dispatch(loginSuccess(user));
    })
    .catch((error) => {
      dispatch(loginFail(error.message));
      alert(error.message);
    });
  }
}