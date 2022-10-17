import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CreateContext } from "../utils/CreateContext";
import {
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Signup = () => {
  const { register } = useContext(CreateContext);
  const [errorText, setErrorText] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    lname: "",
    fname: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    cpassword: "",
    isSatisfyTerms: "",
  });

  const onChangeData = async (e) => {
    
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.name == "isSatisfyTerms") {
      value = e.target.checked;
    }
    setSignupData({ ...signupData, [name]: value });
  };

  const onClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let data = await register(signupData);
    setSignupData({
      lname: "",
      fname: "",
      email: "",
      dob: "",
      phone: "",
      password: "",
      cpassword: "",
      isSatisfyTerms: "",
    });
    console.log(data)
    setErrorText(data.message);

    setIsLoading(false);

    setInterval(() => {
      setErrorText("");
    }, 3000);


  };
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            {errorText ? (
              <Alert status="success">
                <AlertIcon />
                {errorText}
              </Alert>
            ) : null}
            <form>
              <input
                type="text"
                className="block mt-2 border border-grey-light w-full p-3 rounded mb-4"
                name="fname"
                placeholder="First Name"
                required
                onChange={(e) => onChangeData(e)}
                value={signupData.fname}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lname"
                placeholder="Last Name"
                required
                onChange={(e) => onChangeData(e)}
                value={signupData.lname}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
                onChange={(e) => onChangeData(e)}
                value={signupData.email}
              />
              <input
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="phone"
                max={10}
                min={10}
                placeholder="Phone Number"
                required
                onChange={(e) => onChangeData(e)}
                value={signupData.phone}
              />

              <input
                type="date"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="dob"
                placeholder="Date Of Birth"
                required
                onChange={(e) => onChangeData(e)}
                value={signupData.dob}
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => onChangeData(e)}
                value={signupData.password}
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="cpassword"
                placeholder="Confirm Password"
                required
                onChange={(e) => onChangeData(e)}
                value={signupData.cpassword}
              />
              <div className="text-center text-sm text-grey-dark mt-4">
                <input
                  type="checkbox"
                  className="mx-2"
                  name="isSatisfyTerms"
                  onChange={(e) => onChangeData(e)}
                  required
                />
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-blue-500 text-grey-dark mx-2"
                  to="#"
                >
                  Terms of Service
                </a>
                and
                <a
                  className="no-underline border-b border-blue-400 mx-2 text-grey-dark"
                  to="#"
                >
                  Privacy Policy
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1 mt-5"
                onClick={onClick}
              >
                {loading ? <Spinner /> : "Create Account"}
              </button>
              <button
                type="button"
                className="w-full text-center py-3 rounded bg-red-400 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                <NavLink to="/auth/google">Sign-in With Google</NavLink>
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <NavLink
              className="no-underline border-b border-blue text-black"
              to="/api/login"
            >
              Log in
            </NavLink>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
