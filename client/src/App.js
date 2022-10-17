import React, { useContext } from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { Route, Routes, redirect } from "react-router-dom";
import Marketplace from "./Components/Marketplace";
import Navbar from "./Components/Navbar";
import { CreateContext } from "./utils/CreateContext";
// import ForgetPassword from './Components/ForgetPassword';
const App = () => {
  const { loggedIn } = useContext(CreateContext);
  return (
    <>
      <div className="container p-5">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/api/signup" element={<Signup />} />
          <Route exact path="/api/login" element={<Login />} />
          <Route
            exact
            path="/api/primary-market"
            element={!loggedIn ? <Marketplace /> : <Login />}
          />
          {/* <Route path='/api/forget-password' exact element={<ForgetPassword/>} /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
