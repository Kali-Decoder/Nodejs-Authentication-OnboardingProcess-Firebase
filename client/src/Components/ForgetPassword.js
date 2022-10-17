import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { CreateContext } from "../utils/CreateContext";

const ForgetPassword = () => {
  const { login } = useContext(CreateContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChangeData = async (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginData({ ...loginData, [name]: value });
  };
  const [errorText, setErrorText] = useState("");
  const [loading, setIsLoading] = useState(false);

  const onClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let data = await login(loginData);
    console.log("login", data);
    // setErrorText(data.message);
    // setLoginData({
    //   email: "",
    //   password: "",
    // });
    // setIsLoading(false);
    // setInterval(() => {
    //   setErrorText("");
    // }, 3000);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-md rounded w-1/2 px-8 pt-6 pb-8 mb-4 flex flex-col">
          <form>
            <div className="mb-4">
              {errorText ? (
                <Alert status="success">
                  <AlertIcon />
                  {errorText}
                </Alert>
              ) : null}
              <label
                className="block text-grey-darker mt-4 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="username"
                type="email"
                placeholder="Username"
                required
                name="email"
                value={loginData.email}
                onChange={(e) => onChangeData(e)}
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
                name="password"
                value={loginData.password}
                onChange={(e) => onChangeData(e)}
              />
              <p className="text-red text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex">
                <button
                  className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={(e) => onClick(e)}
                >
                  {loading ? <Spinner /> : "Sign In"}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
