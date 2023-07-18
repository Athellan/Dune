/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useParams } from "react-router-dom";
import { firestore } from "../lib/controller";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Character from "./CharacterCard";

function CharacterDetail() {
  const { id } = useParams();
  
  // fetch a single character from the API
  const getCharacter = doc(firestore, `characters/${id}`);

  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
  const fetchCharacterData = async () => {
    setIsLoading(true);
  const docSnap = await getDoc(getCharacter);
  if(docSnap.exists()) {
    const newCharacterObj = {
      id: docSnap.id,
      ...docSnap.data(),
    };
    setCharacter(newCharacterObj);
    setIsLoading(false);
  } else {
    console.log("No such document!");
    }
  };
  fetchCharacterData; 
  },[]);

  if (isLoading) return <div className="loading"></div>
  return (
    <div className="character-details">
      {Object.keys(character) && Object.keys(character).length ? (
        <Character character={character}/>
      ) : null}
    </div>
  );
}

export default CharacterDetail;
