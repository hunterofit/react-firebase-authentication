import app from 'firebase/app';
import 'firebase/auth'; // Firebase Authentication API

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

const config = {
  apiKey: "AIzaSyDs9CVNii0ncLl3E747Cb1e3PKiAqUm3Ys",
  authDomain: "my-firebase-project-5b3ff.firebaseapp.com",
  databaseURL: "https://my-firebase-project-5b3ff.firebaseio.com",
  projectId: "my-firebase-project-5b3ff",
  storageBucket: "my-firebase-project-5b3ff.appspot.com",
  messagingSenderId: "505801732832"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  
  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}

export default Firebase;