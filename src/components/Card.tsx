import { onSnapshot } from "firebase/firestore";
import { charactersCollection } from "../lib/controller";
import { useEffect, useState } from "react";
import { DocumentData, QuerySnapshot } from "firebase/firestore/lite";
import { Newcharacter } from "../types/character";
import Character from "./Character";

function Card() {
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
  return (
    <div>
      <div className="card">
        <h1 className="title">L'équipe</h1>
        {characters?.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
}

export default Card;
