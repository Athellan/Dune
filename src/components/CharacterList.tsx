/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { onSnapshot } from "firebase/firestore";
import { charactersCollection } from "../lib/controller";
import { useEffect, useState } from "react";
import { DocumentData, QuerySnapshot } from "firebase/firestore/lite";
import { NewCharacter } from "../types/character";
import Character from "./CharacterCard";

function CharacterList() {
  const [characters, setCharacters] = useState<NewCharacter[]>([]);

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
  return (
    <div>
      <div className="card">
        <h1 className="title mb-5">L'équipe</h1>
        {characters?.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
