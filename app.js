const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cookieSession = require('cookie-session')
const passport = require("passport");
require("dotenv").config();

const GoogleStrategy = require("passport-google-oauth2").Strategy;
//Middleware
app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_SECRET],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize()); // init passport on every route call
app.use(passport.session()); //allow passport to use "cookie-session"
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(require("cors")());

authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
};

//Use "GoogleStrategy" as the Authentication Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      passReqToCallback: true,
    },
    authUser
  )
);

passport.serializeUser((user, done) => {
  console.log(`\n--------> Serialize User:`);
  console.log(user);
  // The USER object is the "authenticated user" from the done() in authUser function.
  // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.

  done(null, user);
  
});
passport.deserializeUser((user, done) => {
  console.log("\n--------- Deserialized User:");
  console.log(user);
  // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
  // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App.

  done(null, user);
});
const authRoutes = require("./routes/auth");
const marketRoutes= require("./routes/market.routes");

app.use("/api", authRoutes);
app.use("/api",marketRoutes);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",

  passport.authenticate("google", {
    successRedirect: "/api/primary-market",
    failureRedirect: "/api/signup",
  })
);

//Define the Login Route

// app.get("/login", (req, res) => {
//   res.send("You Are Logged In");
// });
// app.get("/", (req, res) => {
//   res.send(`<a href="/api/signup">Signup</a>`);
// });

const port = 5000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
