import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyCfhyTT9bDhmL-CpJu56Xnw5Qa5W1cgpPs',
  authDomain: 'my-tools-e3076.firebaseapp.com',
  databaseURL: 'https://my-tools-e3076.firebaseio.com',
  projectId: 'my-tools-e3076',
  storageBucket: 'my-tools-e3076.appspot.com',
  messagingSenderId: '866573250144'
};
firebase.initializeApp(config);
export default firebase;
