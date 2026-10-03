// =========================================================
// BUGHUNT: FIREBASE CONFIGURATION (js/firebase-config.js)
// Connected to Firebase Project: bughunt-9df20
// =========================================================

const firebaseConfig = {
  apiKey: "AIzaSyCeXC5hFR6cZVc1ByAsCwfuEs0uKdz1dFk",
  authDomain: "bughunt-9df20.firebaseapp.com",
  projectId: "bughunt-9df20",
  storageBucket: "bughunt-9df20.firebasestorage.app",
  messagingSenderId: "557910094672",
  appId: "1:557910094672:web:ebb7434b3e1899b280b255",
  measurementId: "G-PLVBK057HQ"
};

if (typeof firebase !== "undefined" && (!firebase.apps || !firebase.apps.length)) {
  firebase.initializeApp(firebaseConfig);
}

window.firebaseConfig = firebaseConfig;
window.firestoreDb = (typeof firebase !== "undefined" && firebase.firestore) ? firebase.firestore() : null;
