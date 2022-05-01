import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCLnbjH_UBxVQi5ytleLvSQVUpJ48cKpKE",
    authDomain: "rn-instagram-clone-clubhub.firebaseapp.com",
    projectId: "rn-instagram-clone-clubhub",
    storageBucket: "rn-instagram-clone-clubhub.appspot.com",
    messagingSenderId: "115734454385",
    appId: "1:115734454385:web:f86a53648618a6704efbd0"
};
  
// Initialize Firebase
!firebase.apps.length ?
firebase.initializeApp(firebaseConfig) :
firebase.app()

const db = firebase.firestore()

export { firebase, db }
