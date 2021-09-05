import * as firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./authconfig";

firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider);

  // .then((result) => {
  //   console.log(result);
  //   return true;
  // })
  // .catch((error) => {
  //   console.log(error);
  //   return false;
  // });
};
