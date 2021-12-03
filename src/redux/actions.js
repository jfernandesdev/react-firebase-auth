import * as types from './actionTypes';
import { auth, googleAuthProvider, facebookAuthProvider } from '../firebase';
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

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(({user}) => {
      user.updateProfile({
        displayName
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

// functions for set user
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

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

//login functions using google
const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => ({
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

const googleSignInFail = (error) => ({
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
});

export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => {
        dispatch(googleSignInFail(error.message));
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

//login functions using facebook
const facebookSignInStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START,
});

const facebookSignInSuccess = (user) => ({
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
});

const facebookSignInFail = (error) => ({
  type: types.FACEBOOK_SIGN_IN_FAIL,
  payload: error,
});

export const facebookSignInInitiate = () => {
  return function (dispatch) {
    dispatch(facebookSignInStart());
    auth
      .signInWithPopup(facebookAuthProvider)
      .then(({ user }) => {
        dispatch(facebookSignInSuccess(user));
      })
      .catch((error) => {
        dispatch(facebookSignInFail(error.message));
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


//login functions for reset password
// functions for logout
const resetPasswordStart = () => ({
  type: types.RESET_PASSWORD_START,
});

const resetPasswordSuccess = () => ({
  type: types.RESET_PASSWORD_SUCCESS,
});

const resetPasswordFail = (error) => ({
  type: types.RESET_PASSWORD_FAIL,
  payload: error,
});

export const resetPasswordInitiate = (email, config) => {
  return function (dispatch) {
    dispatch(resetPasswordStart());
    auth
    .sendPasswordResetEmail(email, config)
    .then((resp) => {
      dispatch(resetPasswordSuccess())
      toast.success('E-mail de recuperação enviado com sucesso!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch((error) => {
      dispatch(resetPasswordFail(error.code));
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