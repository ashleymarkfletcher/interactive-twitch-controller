// Type "Hello World" then press enter.
var robot = require("robotjs");
var firebase = require("firebase");
var config = {
  apiKey: "AIzaSyBxTjTlNW-AAeiwZ_8xRuIzQjSvVZq2E84",
  authDomain: "fir-keypress.firebaseapp.com",
  databaseURL: "https://fir-keypress.firebaseio.com",
  storageBucket: "fir-keypress.appspot.com",
  messagingSenderId: "470329092816"
};

firebase.initializeApp(config);

const db = firebase.database();
const keyPressRef = db.ref('keys')
var lastKey = {}


setInterval(function () {
  keyPressRef.limitToLast(1).once('value').then(function(snapshot) {
  const keyObject = snapshot.val();
  const key =  keyObject[Object.keys(keyObject)[0]]
  if (lastKey.id === key.id) {
    console.log('same as last!');
  } else {
    console.log('new key:', key);
    lastKey = key
    console.log(key.key,' ', lastKey.key);
    console.log(keyCodeToString(key.key));
    const toPress = keyCodeToString(key.key)
    if (toPress != null) {
      robot.keyTap(toPress)
    }
  }
  });
}, 10000);

function keyCodeToString(key) {
  switch (key) {
    case 38:
      return 'up'
    case 40:
      return 'down'
    case 37:
      return 'left'
    case 39:
      return 'right'
    default:{
      return null
    }

  }
}
// setTimeout(function () {
//
//   // Type "Hello World".
//   robot.typeString("Hello World");
//
//   // Press enter.
//   robot.keyTap("enter");
// }, 10000);
