import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPzlXZ6uvmFh6WcQfHdKr29vB0Wp-xpjc",
  authDomain: "hotelapp-dev-e1175.firebaseapp.com",
  projectId: "hotelapp-dev-e1175",
  storageBucket: "hotelapp-dev-e1175.appspot.com",
  messagingSenderId: "873199911166",
  appId: "1:873199911166:web:2602b45bb0c4d2a59ee5af",
  storageBucket:"gs://hotelapp-dev-e1175.appspot.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;