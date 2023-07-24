/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { addDoc, collection, deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "./firebase";
import { AddCharacter } from "../types/character";
import { NavigateFunction } from "react-router-dom";

export const firestore = getFirestore(app);

// characters
export const charactersCollection = collection(firestore, "characters");

// add character
export const addCharacter = async (character: AddCharacter) => {
    const newCharacter = await addDoc(charactersCollection, { ...character })
    console.log("new character added: ", newCharacter.path);
}

// delete character
export const deleteCharacter = async (id: string | undefined, navigate: NavigateFunction) => {
    const character = doc(firestore, `characters/${id}`)
    await deleteDoc(character);
    console.log("character deleted");
    navigate("/")
}

// update character
export const updateCharacter = async (
    id: string | undefined,
    docData: any
) => {
    const getCharacter = doc(firestore, `characters/${id}`);
    await setDoc(getCharacter, docData, { merge: true });
    console.log("The description has been updated.");
};