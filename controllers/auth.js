const { Users } = require("../config/firebase");
const bcrypt = require("bcryptjs");
const sendMail = require("../utils/nodemailer");
const crypto = require("crypto");
require("dotenv").config();
var jwt = require("jsonwebtoken");
// const sendEmail = require("../utils/nodemailer");
// signup
exports.signup = async (req, res) => {
  
  let { fname, lname, email, password, cpassword, dob, phone, isSatisfyTerms } =
    req.body;

  let snapshot = await Users.get();
  let data = await snapshot.docs.map((doc) => doc.data());
  let isExist = data.filter((item) => item.email === email);
  if (isExist.length != 0) {
    return res.status(422).json({ message: "Account Already Exist" });
  }

  if (
    !fname ||
    !lname ||
    !email ||
    !password ||
    !cpassword ||
    !dob ||
    !phone ||
    !isSatisfyTerms
  ) {
    return res.status(422).json({
      message: "Please Filled Details Properly",
    });
  }
  if (password !== cpassword) {
    return res.status(422).json({
      message: "Password Not Matching",
    });
  }
  password = await bcrypt.hash(password, 10);

  await Users.add({
    fname,
    lname,
    email,
    password,
    dob,
    phone,
    isSatisfyTerms: isSatisfyTerms === "on" ? true : false,
  });
  // let x = await sendEmail(
  //   "neerajchoubisa876@gmail.com",
  //   "Verification For Signup ",
  //   "From Zoth Io"
  // );

  // res.redirect("/api/login");
  res.status(200).json({ message: "Register Successfully " });
};

// signin
exports.signin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    // return res.status(422).json({
    //   email: "email is required",
    //   password: "password is required",
    // });
    // res.redirect("/api/login");
    return res.status(404).json({message:"Please Fill All Details "})
  }

  let snapshot = await Users.get();
  let data = await snapshot.docs.map((doc) => doc.data());
  let isExist = data.filter((item) => item.email === req.body.email);
  if (isExist.length == 1) {
    let isMatch = await bcrypt.compare(req.body.password, isExist[0].password);
    if (isMatch) {
      let token = await jwt.sign(
        { email: req.body.email, isAuthorised: true },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      req.session.token = token;
      // console.log(req.session);
      // res.redirect(`/api/primary-market`);
      
      return res.status(200).json({message:"You Are Logged In"});
    }
   
    // return res.redirect("/api/login");
    return res.status(402).json({message:"You Are Not Authorised"})
  }
  req.session.isAuthorised = false;
  return res.status(422).json({ message: "Account Not Exist Please Signup First" });
  // res.redirect("/api/login");
  // return res.status(402).json({message:"You Are Not Authorised"})
 
};

exports.forgetPassword = async (req, res) => {
  if (!req.body.email) {
    return res.status(422).json({ email: "email is required" });
  }
  try {
    let token = await jwt.sign(
      { email: req.body.email, isAuthorised: true },
      process.env.JWT_SECRET,
      {
        expiresIn: 100,
      }
    );
    req.session.forgotPasswordToken= token;
    let link = `http://localhost:3000/api/reset-password/${token}`;
    sendMail(req.body.email, "Password Reset Request", link);
    console.log(link);
    res.redirect("/api/login");
  } catch (error) {
    console.log(error);
  }
};
