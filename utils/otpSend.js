const accountSid = "AC8ca189b90009f173d2a699ff5fca8e45";
const authToken = "df72f845b90afb31423b8a8fe84a8c14";

const client = require("twilio")(accountSid, authToken);

const sendOtp = async() => {

  client.messages.create(
    {
      from: +19808094813,
      to: 9079257904,
      body: "create using callback",
    },
    function (err, result) {
      console.log("Created message using callback");
      console.log(result);
      console.log(err);
    }
  );

};

sendOtp();
