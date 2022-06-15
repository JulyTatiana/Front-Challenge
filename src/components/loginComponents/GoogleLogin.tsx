import { signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { logInInReducer } from "../../state/slice/loggedinSlice";


const providerGoogleAuth = new GoogleAuthProvider();

import * as React from 'react';

interface IGoogleLoginProps {
}

const GoogleLogin: React.FunctionComponent<IGoogleLoginProps> = (props) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const signInWithGoogleButton = () => {

        signInWithPopup(auth, providerGoogleAuth)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential:OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
    
          const token = credential!.accessToken;
    
          // The signed-in user info.
          //If the logged in is succesfull you will acces this part of the code where you will 
          //get a lot of information about the user that have logged in
          const user = result.user;
    
          /*Whit the information of the user you can populate an state that is mainly focused on 
            holding the information of the user that is logged in*/
            console.log(user);
    
          dispatch(logInInReducer(user.displayName))
          
          navigate('/provider')
    
          // ...
        }).catch((error) => {
    
          //If the logged in is not succesfull yu will get to this part and with the message you can tell 
          //the user what went wrong
    
    
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      }
  return (
  
  
  // <div className="">
  //   <button onClick={signInWithGoogleButton} className=''>Log in with google</button>
  // </div>
  
  <div className="form-wrapper">
  <h1>Sign In</h1>
  <form>
    <div className="form-item">
      <label for="email"></label>
      <input type="email" name="email" required="required" placeholder="Email Address"></input>
    </div>
    <div className="form-item">
      <label for="password"></label>
      <input type="password" name="password" required="required" placeholder="Password"></input>
    </div>
    <div className="button-panel">
      <input type="submit" className="button" title="Sign In" value="Sign In"></input>
    </div>
    <div className="button-panel">
    <button type="submit" onClick={signInWithGoogleButton} className='button'>Log in with google</button>
    </div>
  </form>
  
  <div className="form-footer">
    <p><a href="#">Create an account</a></p>
    <p><a href="#">Forgot password?</a></p>
  </div>
  </div>
  );
};

export default GoogleLogin;



