/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link } from "react-router-dom";
import { Newcharacter } from "../types/character";

interface IProps {
  character: Newcharacter;
}

function Character({ character }: IProps) {
  console.log(character);
  return (
    <div className="character-preview">
      <div className="flex">
        <img src={character.avatar} className="character-image" />
        <div className="">
          <h2 className="character__name font-bold">{character.name}</h2>
          <h3 className="character__role">{character.role}</h3>
          <p className="character_dicton">"{character.dicton}"</p>
          <p className="character__description">{character.description}</p>

          <Link to={`/character/${character.name}`}>
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
