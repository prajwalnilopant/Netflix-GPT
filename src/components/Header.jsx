import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successfully and Navigate to Home page.
        navigate("/");
      })
      .catch((error) => {
        // An error happened. Navigate to Error Page.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen py-4 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-35" src="https://cdn.prod.website-files.com/64ea57571d50b02423c4505d/64fb2d9af4bc13f2456f85eb_netflix%20logo%20png.png" alt="netflix-logo" />
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
