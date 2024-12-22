import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDGklln3AdoSF9yiqRibBVkD8C5h8M0WhA",
  authDomain: "olxclone-b4bd2.firebaseapp.com",
  projectId: "olxclone-b4bd2",
  storageBucket: "olxclone-b4bd2.firebasestorage.app",
  messagingSenderId: "239846157688",
  appId: "1:239846157688:web:4291dba9e816c531b0ac8d",
  measurementId: "G-QVJ1MDLP4X"
};




export default firebase.initializeApp(firebaseConfig);