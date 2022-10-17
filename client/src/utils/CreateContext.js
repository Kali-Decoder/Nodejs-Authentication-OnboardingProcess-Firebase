import React, { createContext } from "react";
import axios from "axios";
export const CreateContext = createContext();

const CreateContextProvider = ({ children }) => {
  const login = async ({ email, password }) => {
    try {
      let response = axios.post("/api/signin", {
        email,
        password,
      });
      // axios.get("/api/primary-market");
     
      return  (await response).data;
    } catch (error) {
      console.log(error);
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
      // axios.get("/api/login");
      return await response.data;
    } catch (error) {
      console.log("Error in register component");
      return await error.response.data;
    }
  };
  return (
    <>
      <CreateContext.Provider value={{ register, login }}>
        {children}
      </CreateContext.Provider>
    </>
  );
};

export default CreateContextProvider;
