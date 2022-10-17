import React, { createContext, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
export const CreateContext = createContext();

const CreateContextProvider = ({ children }) => {
  const history = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const login = async ({ email, password }) => {
    try {
      let response = axios.post("/api/signin", {
        email,
        password,
      });
      
      setLoggedIn(true);
      history("/api/primary-market");
      return (await response).data;
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
      history("/api/login");
      return await error.response.data;
    }
  };
  const register = async ({
    lname,
    fname,
    email,
    dob,
    phone,
    password,
    cpassword,
    isSatisfyTerms,
  }) => {
    try {
      let response = await axios.post("/api/signup", {
        lname,
        fname,
        email,
        dob,
        phone,
        password,
        cpassword,
        isSatisfyTerms,
      });
      history("/api/login");
      return await response.data;
    } catch (error) {
      console.log("Error in register component");
      history("/api/signup");
      return await error.response.data;
    }
  };
  return (
    <>
      <CreateContext.Provider value={{ register, login, loggedIn }}>
        {children}
      </CreateContext.Provider>
    </>
  );
};

export default CreateContextProvider;
