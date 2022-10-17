import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-md rounded w-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex">
              <button
                className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                <NavLink to="/api/login">Sign In</NavLink>
              </button>
              <button
                className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 mx-2 rounded"
                type="button"
              >
                <NavLink to="/api/signup">Sign Up</NavLink>
              </button>
            </div>
            <NavLink
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              to="/api/forgot"
            >
              Forgot Password?
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
