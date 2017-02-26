// Initialize Firebase
var config = {
  apiKey: "AIzaSyBxTjTlNW-AAeiwZ_8xRuIzQjSvVZq2E84",
  authDomain: "fir-keypress.firebaseapp.com",
  databaseURL: "https://fir-keypress.firebaseio.com",
  storageBucket: "fir-keypress.appspot.com",
  messagingSenderId: "470329092816"
}

firebase.initializeApp(config)

const db = firebase.database()
const keyPressRef = db.ref('keys')


$( ".direction-button" ).click(function() {
  console.log($( this ).text());
  sendKey($( this ).text())

});

$( ".control-button" ).click(function() {
  console.log($( this ).text());
  sendKey($( this ).text())
});

function sendKey(keyPressed) {

  const key = keyPressed

  let newKeyRef = keyPressRef.push().key
  console.log(newKeyRef)

  db.ref('keys/' + newKeyRef).set({
    key: key,
    id: newKeyRef
  })
  .then(() => {console.log('added key')})
  .catch((err) => {console.log('err', err)})
}
