import React from "react";
import { NewCharacter } from "../types/character";

interface IProps {
  character?: NewCharacter; 
}

function CharacterInformation({ character }: IProps) {
  if (!character) {
    return <div>Loading...</div>;
  }

  const { id, name, role, dicton, description } = character;

  return (
    <div className="card">
      <h1>Détails du personnage</h1>
      <p>ID: {id}</p>
      <p>Nom: {name}</p>
      <p>Rôle: {role}</p>
      <p>Dicton: {dicton}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default CharacterInformation;
