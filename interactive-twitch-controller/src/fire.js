import firebase from 'firebase'

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBxTjTlNW-AAeiwZ_8xRuIzQjSvVZq2E84",
  authDomain: "fir-keypress.firebaseapp.com",
  databaseURL: "https://fir-keypress.firebaseio.com",
  storageBucket: "fir-keypress.appspot.com",
  messagingSenderId: "470329092816"
}

const fire = firebase.initializeApp(config)
const db = fire.database()

export { fire, db }
