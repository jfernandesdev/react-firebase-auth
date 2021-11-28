import * as types from './actionTypes';
import { auth } from '../firebase';
import { verifyErroCode } from '../utils/firebase-message';

import { toast } from 'react-toastify';


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
      dispatch(registerFail(error.code));
      toast.error(verifyErroCode(error.code), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      dispatch(loginFail(error.code));
      toast.error(verifyErroCode(error.code), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }
}

// functions for logout
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
    .catch((error) => {
      dispatch(logoutFail(error.message));
      toast.error(verifyErroCode(error.code), {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }
}