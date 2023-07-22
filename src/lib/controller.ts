import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { AddCharacter } from "../types/character";

export const firestore = getFirestore(app);

// characters
export const charactersCollection = collection(firestore, "characters");

// add character
export const addCharacter = async (character: AddCharacter) => {
    const newCharacter = await addDoc(charactersCollection, { ...character })
    console.log("new character added: ", newCharacter.path);
}