import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB6vPcS4KCoyqPwA1aSeDBI4ewZPR1KWmc',
  authDomain: 'kitt3-7dd3f.firebaseapp.com',
  databaseURL: 'https://kitt3-7dd3f.firebaseio.com',
  projectId: 'kitt3-7dd3f',
  storageBucket: '',
  messagingSenderId: '662438377065',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
