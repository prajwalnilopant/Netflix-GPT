import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  // Always keep useDispatch on the top.
  const dispatch = useDispatch();
  // X-- const navigate = useNavigate(); --X. If it is in the Body Component, then it will throw an error.
  // useNavigate can not be here. as useNavigate should be under some child component.
  // Here, Body is a parent component(as appRouters were written here.), where are login, browse or Header are child components.
  // Solutions:
  // 1. Use window.location.href or window.open()
  // 2. Move out the appRoutrer into a parent level like app.jsx
  // 3. Do not use navigate here in the code, but instead navigate it from some other place. Essentially a Child. We are moving it to Login
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successfully and Navigate to Home page.
        // This navigate() is no longer needed here, as navigate part is being taken care by onAuthStateChanged.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened. Navigate to Error Page.
        // navigate("/error");
      });
  };

  // This useEffect runs only once.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in. Push the user data into the store
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        // There is a catch here, uid and email will be updated but displayName and photoURL will not be updated. Because both are unavailable at this time.
        // Solution: dispatch an action from updateProfile() within createUserWithEmailAndPassword.
        // As soon as user signs in, navigate the user to browse page.

        //Note: The header component is inside route provider (App -> Body -> appRouter -> Browse -> Header); Hence, navigate function will work here, without any error.
        // As we are already navigating from here, there is no need for us to have navigate() inside login page. Both in, Sign In & Sign Up logic can be removed.
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts. This is needed because, onAuthStateChanged() is called multiple times whenever the header is loaded.
    // And obviously, header keeps on loading multiple times as it is available on top of the page. This attachs onAuthStateChanged() event-listener multiple times on our browser.
    // When component unmounts we should unsubscribe to that event-listener. The return below kind of replicates the componentWillUnmount() behaviour of class-based components.
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen py-4 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-35" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex">
          <img src={user?.photoURL} alt="userIcon" className="w-10" />
          <button onClick={handleSignOut} className="mx-1 font-bold bg-red-500 text-black rounded hover:bg-red-600 w-18 h-10 flex items-center justify-center">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
