import { collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app);

// characters
export const charactersCollection = collection(firestore, "characters");