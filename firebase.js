import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOIXS27Z9d3QZE96tfEAxr0J4ukWW1MaI",
  authDomain: "questoeszeca.firebaseapp.com",
  projectId: "questoeszeca",
  storageBucket: "questoeszeca.appspot.com",
  messagingSenderId: "583927044537",
  appId: "1:583927044537:web:09ca6af330de9720883e68"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);