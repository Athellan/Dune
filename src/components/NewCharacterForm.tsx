import { onSnapshot } from "firebase/firestore";
import { charactersCollection } from "../lib/controller";
import { useEffect, useState } from "react";
import { DocumentData, QuerySnapshot } from "firebase/firestore/lite";
import { Newcharacter } from "../types/character";

function NewCharacterForm() {
  const [characters, setCharacters] = useState<Newcharacter[]>([]);

  useEffect(
    () =>
      onSnapshot(
        charactersCollection,
        (snapshot: QuerySnapshot<DocumentData>) => {
          setCharacters(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      ),
    []
  );

  console.log(characters);
  return (
    <div className="card">
      <h1>Création de ton personnage</h1>
      {characters?.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <p>{character.role}</p>
        </div>
      ))}
    </div>
  );
}

export default NewCharacterForm;
