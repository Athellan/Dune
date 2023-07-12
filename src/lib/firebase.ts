import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // Votre configuration Firebase ici
  apiKey: "AIzaSyBRqBP_3O3gZfuUmFxYAKqDIsKPP1N616E",
  authDomain: "dune-app-34ed6.firebaseapp.com",
  projectId: "dune-app-34ed6",
  storageBucket: "dune-app-34ed6.appspot.com",
  messagingSenderId: "843553455846",
  appId: "1:843553455846:web:d2a64716f35ace14d60527",
  measurementId: "G-M1PY0246Q9",
};

// Initialisez votre application Firebase
export const app = initializeApp(firebaseConfig);
