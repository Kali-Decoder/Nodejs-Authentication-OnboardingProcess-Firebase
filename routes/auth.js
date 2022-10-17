const express = require("express");
const router = express.Router();
require("dotenv").config();
const { signup, signin, forgetPassword } = require("../controllers/auth");

// router.get("/signup", (req, res) => {
//   res.send(`<form action="/api/signup" itemtype="multipart/form-data"  method="POST"   style="border:1px solid #ccc">
//   <div class="container">
//     <h1>Sign Up</h1>
//     <p>Please fill in this form to create an account.</p>
//     <hr>

//     <label for="email"><b>Email</b></label>
//     <input type="text" placeholder="Enter Email" name="email" required>

//     <label for="psw"><b>Fname</b></label>
//     <input type="text" placeholder="Enter Fname" name="fname" value="" required>

//     <label for="psw"><b>Lname</b></label>
//     <input type="text" placeholder="Enter Lname" name="lname" required>

//     <label for="psw"><b>DOB</b></label>
//     <input type="date" placeholder="Enter DOB" name="dob" required>

//     <label for="phone"><b>number</b></label>
//     <input type="number" placeholder="Enter Phone Number" name="phone" required>

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="password" required>


//     <label for="psw-repeat"><b>Confirm Password</b></label>
//     <input type="password" placeholder="Repeat Password" name="cpassword" required>
//     <br/>
//     <br/>
//     <label>
//       <input type="checkbox" checked="checked" name="isSatisfyTerms" style="margin-bottom:15px"> Remember me <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
//     </label>
//       <button type="button" class="cancelbtn"><a href="/api/login" >Signin</a></button>
//       <button type="button" class="cancelbtn"><a href="/auth/google" >Signup With Google</a></button>
//       <button type="submit" class="signupbtn">Create My Account</button>
    
//   </div>
// </form>`);
// });

router.get("/login", (req, res) => {
  res.send(`<form action="/api/signin" itemtype="multipart/form-data"  method="POST"  style="border:1px solid #ccc">
  <div class="container">
    <h1>Login</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required>



    
    <button type="button" class="cancelbtn"><a href="/api/signup" >Rgister First</a></button>
      <button type="submit" class="signupbtn">Login</button>
      <a href="/api/forgot">forgot Password</a>

  </div>
</form>`);
});

// Define the Logout
router.get("/logout", (req, res) => {
  req.session.token = "";
  res.redirect("/api/login");
  console.log(`-------> User Logged out`);
});
router.get("/forgot", (req, res) => {
  res.send(`
  <form action="/api/forgot" itemtype="multipart/form-data"  method="POST"  style="border:1px solid #ccc">
  <div class="container">
    <h1>Forgot Password Request</h1>
    <p>Please fill in this form to recover password.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" name="email" required>

      <button type="submit">Countinue</button>
      

  </div>
</form>
  `);
});

router.get("/reset-password/:token", (req, res) => {
  if (req.params.token == req.session.forgotPasswordToken) {
    res.send(`<form action="/api/reset" itemtype="multipart/form-data"  method="POST"  style="border:1px solid #ccc">
  <div class="container">
    <h1>Reset Password Request</h1>
    <p>Please fill in this form to Reset password.</p>
    <hr>

    <input type="email" placeholder="Enter Email" name="email" required>
    <input type="password" placeholder="Enter New Password" name="password" required>
    <input type="password" placeholder="Enter Confirm Password" name="cpassword" required>

      <button type="submit" class="signupbtn">Reset</button>
      

  </div>
</form>`);
  } else {
    res.send("Your Session Is Expired <a href='/api/login'>Login</a>");
  }
});
router.post("/forgot", forgetPassword);
router.post("/signup", signup);

router.post("/signin", signin);

module.exports = router;
