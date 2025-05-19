import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  // Always keep useDispatch on the top.
  const dispatch = useDispatch();

  // X-- const navigate = useNavigate(); --X. If it is here, then it will throw an error.
  // useNavigate can not be here. as useNavigate should be under some child component.
  // Here, Body is a parent component(as appRouters were written here.), where are login, browse or Header are child components.
  // Solutions:
  // 1. Use window.location.href or window.open()
  // 2. Move out the appRoutrer into a parent level like app.jsx
  // 3. Do not use navigate here in the code, but instead navigate it from some other place. Essentially a Child. We are moving it to Login

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // This useEffect runs only once.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in. Push the user data into the store
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        // There is a catch here, uid and email will be updated but displayName and photoURL will not be updated. Because both are unavailable at this time.
        // Solution: dispatch an action from updateProfile() within createUserWithEmailAndPassword.
        // As soon as user signs in, navigate the user to browse page.
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
