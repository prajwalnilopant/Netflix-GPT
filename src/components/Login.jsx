import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f83b20c7-a289-4aac-bb47-c08a9fec4de7/web/US-en-20250507-TRIFECTA-perspective_d3be4350-0a72-4b05-929b-bc37b3466a11_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="absolute p-12 bg-black/80 w-3/12 my-24 mx-auto right-0 left-0 flex flex-col">
        <h1 className="text-white font-bold text-2xl p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder=" Full Name" className="p-4 m-2 font-bold bg-black/40 text-white rounded w-full h-15" />}
        <input type="text" placeholder=" Email or mobile number" className="p-4 m-2 font-bold  bg-black/40 text-white rounded w-full h-15" />
        <input type="password" placeholder=" Password" className="p-4 m-2 font-bold bg-black/40 text-white rounded w-full h-15" />
        <button className="p-6 m-2 font-bold bg-red-500 text-white rounded hover:bg-red-600 w-full h-10 flex items-center justify-center">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-6 m-2 text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign in here."}
        </p>
      </form>
    </div>
  );
};

export default Login;
