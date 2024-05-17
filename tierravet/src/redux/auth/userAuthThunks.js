import {
    actionRegisterWithEmailAndPassword,
    actionLoginWithEmailAndPassword,
    actionLogout,
    actionLoginWithGoogle,
    actionLoginWithPhone,
    actionVerifyPhoneOTP,
  } from './userAuthActions';
  
  export const registerWithEmailAndPassword = (userData) => {
    return async (dispatch) => {
      dispatch(actionRegisterWithEmailAndPassword(userData));
    };
  };
  
  export const loginWithEmailAndPassword = (userData) => {
    return async (dispatch) => {
      dispatch(actionLoginWithEmailAndPassword(userData));
    };
  };
  
  export const logoutUser = () => {
    return async (dispatch) => {
      dispatch(actionLogout());
    };
  };
  
  export const loginWithGoogle = () => {
    return async (dispatch) => {
      dispatch(actionLoginWithGoogle());
    };
  };
  
  export const loginWithPhone = (phoneNumber) => {
    return async (dispatch) => {
      dispatch(actionLoginWithPhone(phoneNumber));
    };
  };
  
  export const verifyPhoneOTP = (confirmationResult, otp) => {
    return async (dispatch) => {
      dispatch(actionVerifyPhoneOTP(confirmationResult, otp));
    };
  };
  