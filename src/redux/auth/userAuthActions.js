import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import { loginFail, loginRequest, loginSuccess, logout } from "./authSlice";
import { auth, googleProvider } from "../../firebase/firebaseConfig";

export const actionRegisterWithEmailAndPassword = ({ email, password, name }) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(
        loginSuccess({
          name: name,
          id: user.uid,
          email: email,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};

export const actionLoginWithEmailAndPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        loginSuccess({
          id: user.uid,
          email: email,
        })
      );
      return { success: true }; // Indica que el inicio de sesión fue exitoso
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
      return { success: false }; // Indica que el inicio de sesión falló
    }
  };
};

export const actionLogout = () => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};

export const actionLoginWithGoogle = () => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const result = await signInWithPopup(auth, googleProvider);
      dispatch(
        loginSuccess({
          id: result.user.uid,
          email: result.user.email,
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(loginFail(error.message));
    }
  };
};
