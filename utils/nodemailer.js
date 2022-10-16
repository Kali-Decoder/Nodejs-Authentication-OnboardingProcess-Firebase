require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_API);

const sendMail = (email, subject,link) => {
  
  const mailOptions = {
    to: email,
    from: "neerajchoubisa876@gmail.com",
    subject: subject,
    text: `Hi Neerraj Choubisa \n 
                    Please click on the following link ${link} to reset your password. \n\n 
                    If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  sgMail.send(mailOptions, (error, result) => {
    console.log(result);
    console.log(error);
    // if (error) return res.status(500).json({ message: error.message });

    // res
    //   .status(200)
    //   .json({ message: "A reset email has been sent to " + user.email + "." });
  });
};

module.exports= sendMail;
