import app from "../firebase/config";

import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const googleLogin = () =>
  signInWithPopup(auth, googleProvider);

export const logoutUser = () =>
  signOut(auth);