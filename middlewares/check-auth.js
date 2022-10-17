const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res, next) => {
  try {
    console.log("middle",req.session);
    const decode = await jwt.verify(req.session.token,process.env.JWT_SECRET);
    req.userData = decode;
    console.log(req.userData);
    console.log(req.session);
    next();
  } catch (error) {
    console.log(error);
    res.redirect("/api/login")
    // return res.status(401).json({ message: "You Are Not Authorised" });
  }
};
