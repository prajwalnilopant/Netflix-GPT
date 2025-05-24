import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // useRef() will return a .current property which would have all the data.
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form.

    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return; // Returns from the function if there is any message that came.

    // Sign In / Sign Up Logic
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // We are dispatching here using auth.currentUser because of the as soon as the user signs up and goes to the browse page for the very first time, displayName & photoURL won't be available.
              // This happens because the redux store is not updated i.e. the user profile will be updated but the store will not be updated.
              // "auth.currentUser" would have updated value than the "user" would have. (Reason: updateProfile is called after user is declared)
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
              // This is not needed here. As we are navigating from Header.jsx
              // navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // This is not needed here. As we are navigating from Header.jsx
          // console.log(user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background-image" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black/80 w-3/12 my-24 mx-auto right-0 left-0 flex flex-col">
        <h1 className="text-white font-bold text-2xl p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder=" Full Name" className="p-4 m-2 font-bold bg-black/50 text-white rounded w-full h-15" />}
        <input ref={email} type="text" placeholder=" Email or mobile number" className="p-4 m-2 font-bold  bg-black/50 text-white rounded w-full h-15" />
        <input ref={password} type="password" placeholder=" Password" className="p-4 m-2 font-bold bg-black/50 text-white rounded w-full h-15" />
        <p className="text-red-600 font-bold text-md m-2">{errorMessage}</p>
        <button className="p-6 m-2 font-bold bg-red-500 text-white rounded hover:bg-red-600 w-full h-10 flex items-center justify-center" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 m-2 text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign in here."}
        </p>
      </form>
    </div>
  );
};

export default Login;
