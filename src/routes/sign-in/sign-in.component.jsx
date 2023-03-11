import SignUpForm from "../../components/sign-up-form/sign-up-form.components";
import Button from "../../components/button/button.component";
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
      <Button buttonType="google" onClick={logGoogleUser}>Sign In with google popup</Button>
      <SignUpForm />
    </Fragment>
  );
};

export default SignIn;
