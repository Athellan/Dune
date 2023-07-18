/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useLocation } from "react-router-dom";


function CharacterInformation() {
  const location = useLocation();
  const { character } = location.state;

  return (
    <>
    <h1 className="title mb-5 mt-8">Détail du personnage</h1>
    <div className="character-preview">
      <div className="flex">
        <img src={character.avatar} className="character-image" />
        <div className="">
          <h2 className="character__name font-bold">{character.name}</h2>
          <h3 className="character__role">{character.role}</h3>
          <h4 className="character_dicton mb-5">"{character.dicton}"</h4>
          <p className="character__description text-justify">{character.description}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default CharacterInformation;
