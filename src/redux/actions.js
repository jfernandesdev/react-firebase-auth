import * as types from './actionTypes';
import { auth } from '../firebase';

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
    auth.createUserWithEmailAndPassword(email, password).then(({user}) => {
      user.updateProfile({
        name
      })
      dispatch(registerSuccess(user))
    }).catch((error) => {
      dispatch(registerFail(error.message));
      alert(error.message);
    });
  }
} 