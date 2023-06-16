
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyADi-bXo0QS5VNNATgkXAmsty1f7Ock4tE",
    authDomain: "spck-7062c.firebaseapp.com",
    databaseURL: "https://spck-7062c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "spck-7062c",
    storageBucket: "spck-7062c.appspot.com",
    messagingSenderId: "239821860277",
    appId: "1:239821860277:web:bfd0d9b3f3f7f038ea3dfc",
    measurementId: "G-WT58TJJ3TG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
