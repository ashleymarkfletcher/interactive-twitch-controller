const robot = require("robotjs");
const firebase = require("firebase");
const config = {
  apiKey: "AIzaSyBxTjTlNW-AAeiwZ_8xRuIzQjSvVZq2E84",
  authDomain: "fir-keypress.firebaseapp.com",
  databaseURL: "https://fir-keypress.firebaseio.com",
  storageBucket: "fir-keypress.appspot.com",
  messagingSenderId: "470329092816"
}

firebase.initializeApp(config)

const db = firebase.database()
const keyPressRef = db.ref('keys')
var lastKey = {}

setInterval(() => {

  keyPressRef.limitToLast(1).once('value').then((snapshot) => {
    const keyObject = snapshot.val()

    const key =  keyObject[Object.keys(keyObject)[0]]

    // don't keep doing same command
    if (lastKey.id === key.id) {
      console.log('same as last!')
    } else {
      console.log('new key:', key)
      lastKey = key

      console.log(key.key,' ', lastKey.key);
      console.log(keyCodeToString(key.key));

      const toPress = keyCodeToString(key.key)

      if (toPress != null) {
        // robot.keyTap(toPress)
        tactileTap(toPress)
      }

    }
  })
}, 1000)

// switch statement to make room for additional keys if needed
function keyCodeToString(key) {
  switch (key) {
    case 'UP':
      return 'up'
    case 'DOWN':
      return 'down'
    case 'LEFT':
      return 'left'
    case 'RIGHT':
      return 'right'
    case 'A':
      return 'a'
    case 'B':
      return 'b'
    case 'X':
      return 'x'
    case 'Y':
      return 'y'
    default: {
      return null
    }
  }
}

// Tactile Key Tap.
function tactileTap(key) {
  robot.keyToggle(key, "down");
  setTimeout(function() {
    robot.keyToggle(key, "up");
  }, 500);
}
