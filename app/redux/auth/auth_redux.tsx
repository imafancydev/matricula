import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';

const auth = FIREBASE_AUTH;

export const login = (email: any, password: any) => {
  return async (dispatch: any) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      dispatch({ type: 'LOGIN_SUCCESS' });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};

export const register = (email: string, password: string) => {
  return async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      dispatch({ type: 'REGISTER_SUCCESS' });
    } catch (error: any) {
      console.log(error);
      dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
  };
};
