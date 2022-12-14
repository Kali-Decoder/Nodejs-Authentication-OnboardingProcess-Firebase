import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const CreateContext = createContext();

const CreateContextProvider = ({ children }) => {
  const history = useNavigate();
  const [marketData, setMarketData] = useState([]);
  const [marketLoader, setMarketLoader] = useState(false);
  const getMarketAllData = async () => {
    try {
      setMarketLoader(true);
      let data = await axios.get("/api/primarymarket-data");
      data = await data.data;
      setMarketData(data.data);

      setMarketLoader(false);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const getFilterData = async (type, city) => {
    try {
      let data = await getMarketAllData();
      if (!type && !city) {
        setMarketData(data);
      } else if (!type && city) {
        data = data.filter(
          (item) => item.location.toUpperCase() === city.toUpperCase()
        );
        setMarketData(data);
      } else if (!city && type) {
        data = data.filter((item) => item.category === type);
        setMarketData(data);
      } else {
        data = data.filter(
          (item) => item.location.toUpperCase() === city.toUpperCase()
        );
        data = data.filter((item) => item.category === type);
        setMarketData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const getMarketDataByCity = async (city) => {
  //   let data = await getMarketAllData();

  //   console.log(data);
  //   setMarketData(data);
  // };

  // const getMarketDataByCategory = async (type) => {
  //   let data = await getMarketAllData();

  //   data = data.filter((item) => item.category === type);
  //   console.log(data);
  //   setMarketData(data);
  // };
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

  const loginGoogle = async (code) => {
    console.log("code", code);
    let res = await axios.post("/api/google", { code });
    console.log(res);
    // return fetch('/api/google', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ code }),
    // }).then((res) => {
    //   if (res.ok) {
    //     return res.json();
    //   } else {
    //     return Promise.reject(res);
    //   }
    // });
  };

  useEffect(() => {
    getMarketAllData();
  }, []);
  return (
    <>
      <CreateContext.Provider
        value={{
          register,
          login,
          loggedIn,
          marketData,
          marketLoader,
          getMarketAllData,
          loginGoogle,
          getFilterData
        }}
      >
        {children}
      </CreateContext.Provider>
    </>
  );
};

export default CreateContextProvider;
