import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { CreateContext } from "../utils/CreateContext";

export default () => {
  const { loginGoogle } = useContext(CreateContext);
  const responseGoogle = async (authResult) => {
    console.log("Auth Result", authResult);
    try {
      if (authResult["code"]) {
        const result = await loginGoogle(authResult["code"]);
        console.log(result);
        // props.loginGoogle(result);
      } else {
        throw new Error(authResult);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GoogleLogin
      // use your client id here
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login with google"
      responseType="code"
      /**
       * To get access_token and refresh_token in server side,
       * the data for redirect_uri should be postmessage.
       * postmessage is magic value for redirect_uri to get credentials without actual redirect uri.
       */
      redirectUri="postmessage"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
