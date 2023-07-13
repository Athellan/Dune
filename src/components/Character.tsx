import { Newcharacter } from "../types/character";

interface IProps {
  character: Newcharacter;
}
function Character({ character }: IProps) {
  console.log(character);
  return (
    <div className="character">
      <div className="character__name">{character.name}</div>
      <img src={character.avatar} alt="" className="character__img" />
    </div>
  );
}

export default Character;
