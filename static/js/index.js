// firebase config
const config = {
  apiKey: "AIzaSyBxTjTlNW-AAeiwZ_8xRuIzQjSvVZq2E84",
  authDomain: "fir-keypress.firebaseapp.com",
  databaseURL: "https://fir-keypress.firebaseio.com",
  storageBucket: "fir-keypress.appspot.com",
  messagingSenderId: "470329092816"
}

// twitchAppID
const clientID = 'n3y5s8iqnjtbenjpsf17f5ii2pp8ba'

// initialise firbase
firebase.initializeApp(config)
const db = firebase.database()
const keyPressRef = db.ref('keys')

function streams(streams){
  console.log(streams);
  if (streams.stream === null) {
    console.log('not live!');
    $( ".online-status" ).css('background-color', 'red')
    $( ".status-text" ).text('OFFLINE')
  } else {
    console.log('live!');
    $( ".online-status" ).css('background-color', 'red')
    $( ".status-text" ).text('ONLINE')
  }
}

getStream()

setInterval(getStream, 30000)

function getStream() {
  $.ajax({
    url: "https://api.twitch.tv/kraken/streams/amfletcher?client_id=n3y5s8iqnjtbenjpsf17f5ii2pp8ba",
    dataType: "jsonp",
    jsonpCallback: "streams"
  })
}


$( ".direction-button" ).click(function() {
  console.log( $(this).text() )
  sendKey( $(this).text() )
})

$( ".control-button" ).click(function() {
  console.log( $(this).text() )
  sendKey( $(this).text() )
})

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
