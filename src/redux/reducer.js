import * as types from './actionTypes';

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    //if the status is start
    case types.REGISTER_START: 
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.GOOGLE_SIGN_IN_START:
    case types.FACEBOOK_SIGN_IN_START:
    case types.RESET_PASSWORD_START:
      return {
        ...state,
        loading: true,  
      };
    // if the status is success
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.GOOGLE_SIGN_IN_SUCCESS:
    case types.FACEBOOK_SIGN_IN_SUCCESS: 
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    case types.LOGOUT_SUCCESS:
    case types.RESET_PASSWORD_SUCCESS: 
      return {
        ...state,
        currentUser: null,
      };

    case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    //if the status is fail
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
    case types.GOOGLE_SIGN_IN_FAIL:
    case types.FACEBOOK_SIGN_IN_FAIL:
    case types.RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //if is default
    default:
      return state;
  }
};

export default userReducer;