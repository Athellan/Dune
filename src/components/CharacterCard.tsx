/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Link, useNavigate } from "react-router-dom";
import { NewCharacter } from "../types/character";
import { deleteCharacter } from "../lib/controller";

interface IProps {
  character: NewCharacter;
  detailsPage?: boolean;
}

function Character({ character }: IProps) {

  const navigate = useNavigate();
  return (
    <div className="character-preview !my-10">
      <div className="flex">
        <img src={character.avatar} className="character-image" />
        <div className="">
          <h2 className="character__name font-bold">{character.name}</h2>
          <h3 className="character__role">{character.role}</h3>
          <h4 className="character_dicton mb-5">"{character.dicton}"</h4>
          <p className="character__description text-justify">{character.description}</p>
          <div className="">
            <Link to={`/character/${character.id}`} state={{ character: character }}>
              <button className="moreinfo-btn mt-10 font-bold">
                En savoir plus
              </button>
            </Link>
            <button
              onClick={() => deleteCharacter(character.id, navigate)}
              className="inline-block ml-14 px-3 py-1 text-white font-bold bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Character;
