/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Link } from "react-router-dom";
import { NewCharacter } from "../types/character";

interface IProps {
  character: NewCharacter;
  detailsPage?: boolean;
}

function Character({ character }: IProps) {
  return (
    <div className="character-preview">
      <div className="flex">
        <img src={character.avatar} className="character-image" />
        <div className="">
          <h2 className="character__name font-bold">{character.name}</h2>
          <h3 className="character__role">{character.role}</h3>
          <h4 className="character_dicton mb-5">"{character.dicton}"</h4>
          <p className="character__description text-justify">{character.description}</p>

          <Link to={`/character/${character.id}`}>
            <button className="moreinfo-btn mt-10 font-bold">
              En savoir plus
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Character;
