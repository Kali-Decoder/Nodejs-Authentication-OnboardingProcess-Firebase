import React, { createContext } from "react";
import axios from "axios";
export const CreateContext = createContext();

const CreateContextProvider = ({ children }) => {
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
      let response = await axios.post("http://localhost:3000/api/signup", {
        lname,
        fname,
        email,
        dob,
        phone,
        password,
        cpassword,
        isSatisfyTerms,
      });

      return response.data;
    } catch (error) {
      console.log("Error in register component");
      console.log(error);
    }
  };
  return (
    <>
      <CreateContext.Provider value={{ register }}>
        {children}
      </CreateContext.Provider>
    </>
  );
};

export default CreateContextProvider;
