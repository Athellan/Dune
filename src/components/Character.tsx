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
        <div className="ml-20">
          <h2 className="character__name">{character.name}</h2>
          <h3 className="character__role">{character.role}</h3>
        </div>
      </div>
    </div>
  );
}

export default Character;
