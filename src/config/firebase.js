import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDQgh2YJuqgpRt822Fy_qeXPI0uhDe6ZyI",
    authDomain: "react-hackathon.firebaseapp.com",
    databaseURL: "https://react-hackathon.firebaseio.com",
    projectId: "react-hackathon",
    storageBucket: "react-hackathon.appspot.com",
    messagingSenderId: "44539145284"
  };
  firebase.initializeApp(config);

  export default firebase;