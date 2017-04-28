import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyASDMvmJW05eJymsDqyjFdqsrB-R9baAck",
  authDomain: "messengerchatbot-f6775.firebaseapp.com",
  databaseURL: "https://messengerchatbot-f6775.firebaseio.com",
  projectId: "messengerchatbot-f6775",
  storageBucket: "messengerchatbot-f6775.appspot.com",
  messagingSenderId: "524406259822"
}

export const firebaseApp = firebase.initializeApp(config)