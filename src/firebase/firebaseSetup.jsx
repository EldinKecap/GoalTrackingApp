import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBhVp82YUARFVakns1CfFB5cSF0NjTV7jI",
  authDomain: "goaltrackingapp-ff648.firebaseapp.com",
  projectId: "goaltrackingapp-ff648",
  storageBucket: "goaltrackingapp-ff648.appspot.com",
  messagingSenderId: "78227194351",
  appId: "1:78227194351:web:c2a9f3ed08267c830d361a",
  measurementId: "G-0ZD49925FF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;