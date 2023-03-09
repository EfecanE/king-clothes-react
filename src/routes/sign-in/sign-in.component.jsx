import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Fragment } from "react";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <Fragment>
      <h1>I am the Sign-in Page.</h1>
      <button onClick={logGoogleUser}>Sign In with google popup</button>
    </Fragment>
  );
};

export default SignIn;
