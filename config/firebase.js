const firebase = require("firebase");
require("dotenv").config();
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.ROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSENGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Users = db.collection("users");
const PrimaryMarket = db.collection("markets");
module.exports = { Users, PrimaryMarket };
