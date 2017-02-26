// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxTjTlNW-AAeiwZ_8xRuIzQjSvVZq2E84",
  authDomain: "fir-keypress.firebaseapp.com",
  databaseURL: "https://fir-keypress.firebaseio.com",
  storageBucket: "fir-keypress.appspot.com",
  messagingSenderId: "470329092816"
};

firebase.initializeApp(config)

const db = firebase.database();
const keyPressRef = db.ref('keys')

window.onkeyup = function(e) {
  console.log(e.keyCode )
  const key = e.keyCode

  let newKeyRef = keyPressRef.push().key;
  console.log(newKeyRef);

db.ref('keys/' + newKeyRef).set({
  key: key,
  id: newKeyRef
})
.then((value) => {console.log('added key')})
.catch((err) => {console.log('err', err)})

// const newKeyRef = keyPressRef.push();
// keyPressRef.set(key).then((value) => {console.log('here');})
// .catch((err) => {console.log('err', err);});

   //
  //  if (key == 38) {
  //      playerSpriteX += 10;
  //  }else if (key == 40) {
  //      playerSpriteX -= 10;
  //  }
}
