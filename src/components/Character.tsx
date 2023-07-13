import { Newcharacter } from "../types/character";

interface IProps {
  character: Newcharacter;
}
function Character({ character }: IProps) {
  console.log(character);
  return (
    <div className="character-preview">
      <h2 className="character__name">{character.name}</h2>
      <h3 className="character__role">{character.role}</h3>
      <div className="image-container">
        <img src={character.avatar} className="character-image ml-5 mb-7" />
      </div>
    </div>
  );
}

export default Character;
