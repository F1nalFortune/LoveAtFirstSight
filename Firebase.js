import firebase from '@react-native-firebase/app';

const config = {
  apiKey: "AIzaSyBX8K5f5QqClhWXXff8-STbyXNivBrkViw",
  authDomain: "loveatfirstsight.firebaseapp.com",
  databaseURL: "https://loveatfirstsight-default-rtdb.firebaseio.com/",
  projectId: "loveatfirstsight",
  storageBucket: "loveatfirstsight.appspot.com",
  messagingSenderId: "499035082014",
  appId: "1:499035082014:web:a4c0acf48172d6cc504d0f",
  measurementId: "G-JQMTEX13B7",
  persistence: true
};



let app = firebase.initializeApp(config);

export const db = app.database();
