const firebase = require("firebase");
require("firebase/firestore");
const dotenv = require('dotenv').config();

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
});

let db = firebase.firestore();