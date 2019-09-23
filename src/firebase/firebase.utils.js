import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDVcT_xuLP5JFCOtKq7sRWirXKPMI9FN2o",
        authDomain: "react-ecommerce-backend.firebaseapp.com",
        databaseURL: "https://react-ecommerce-backend.firebaseio.com",
        projectId: "react-ecommerce-backend",
        storageBucket: "",
        messagingSenderId: "426770689394",
        appId: "1:426770689394:web:4b41cf1ea3c43265eac1eb",
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
