/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCtoEVilsjmEX9xBv3qGmq6VZgIzD9cnGQ",

  authDomain: "memory-game-2198d.firebaseapp.com",

  projectId: "memory-game-2198d",

  storageBucket: "memory-game-2198d.appspot.com",

  messagingSenderId: "631584871655",

  appId: "1:631584871655:web:3acab5170ce6651a9efe42",

  measurementId: "G-CPLE3L3ECM"


};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}