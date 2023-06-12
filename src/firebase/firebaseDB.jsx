import app from "./firebaseSetup";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export default db;