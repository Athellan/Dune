/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateCharacter } from "../lib/controller";
import { Button, Input, Textarea, Tag } from "@chakra-ui/react";

function CharacterInformation() {

  const location = useLocation();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState(location.state.character);
  const [newName, setNewName] = useState(editedCharacter.name);
  const [newDescription, setNewDescription] = useState(editedCharacter.description);
  const [newDicton, setNewDicton] = useState(editedCharacter.dicton);
  const [newRole, setNewRole] = useState(editedCharacter.role);
  const [newAvatar, setNewAvatar] = useState(editedCharacter.avatar);

  const id = location.state.character.id

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    updateCharacter(id, { avatar: newAvatar, description: newDescription, name: newName, dicton: newDicton, role: newRole });
    setEditMode(false);
    navigate('/');
    console.log(editedCharacter)
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setNewAvatar(editedCharacter.avatar);
    setNewName(editedCharacter.name);
    setNewDescription(editedCharacter.description);
    setNewDicton(editedCharacter.dicton);
    setNewRole(editedCharacter.role);
    setEditedCharacter(location.state.character);
  };

  return (
    <>
      <h1 className="title mb-5 mt-8">Détails du personnage</h1>
      <div className="character-preview">
        <div className="flex flex-col">
          <img src={editedCharacter.avatar} className="character-image mx-auto mt-5" />
          <hr className="border-t border-black mx-auto w-4/6" />
          <div className="">
            {editMode ? (
              <>
                <div className="character-details">
                  <div className="flex flex-col">
                    <div className="flex">
                      <label>Nom:</label>
                      <Input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="character__name font-bold"
                      />
                    </div>
                    <div className="flex">
                      <label>Rôle:</label>
                      <Input
                        type="text"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className="character__role"
                      />
                    </div>
                    <div className="flex">
                      <label>Dicton:</label>
                      <Textarea
                        value={newDicton}
                        onChange={(e) => setNewDicton(e.target.value)}
                        className="character_dicton"
                      />
                    </div>
                    <div className="flex">
                      <label>Description:</label>
                      <Textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="character__description text-justify"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <h2 className="character__name font-bold">{editedCharacter.name}</h2>
                <h3 className="character__role">{editedCharacter.role}</h3>
                <h4 className="character_dicton">"{editedCharacter.dicton}"</h4>
                <p className="character__description">{editedCharacter.description}</p>
                <div>
                  <Tag className="mr-2" variant='solid' colorScheme='linkedin'>{editedCharacter.mainSkill}</Tag>
                  <Tag className="mr-2" variant='solid' colorScheme='blue'>{editedCharacter.secondarySkill}</Tag>
                </div>
                <div className="skills">
                  <Tag className="mr-2" variant='solid' colorScheme='orange'>{editedCharacter.selectedSkill[0].label}</Tag>
                  {editedCharacter.selectedSkill[1] ? (
                    <Tag className="mr-2" variant='solid' colorScheme='orange'>{editedCharacter.selectedSkill[1].label}</Tag>
                  ) : null}
                  {editedCharacter.selectedSkill[2] ? (
                    <Tag className="mr-2" variant='solid' colorScheme='orange'>{editedCharacter.selectedSkill[2].label}</Tag>
                  ) : null}
                  {editedCharacter.selectedSkill[3] ? (
                    <Tag className="mr-2" variant='solid' colorScheme='orange'>{editedCharacter.selectedSkill[3].label}</Tag>
                  ) : null}
                </div>
                <div className="traits">
                  {editedCharacter.selectedTrait[0] ? (
                    <Tag className="mr-2" variant='solid' colorScheme='purple'>{editedCharacter.selectedTrait[0].label}</Tag>
                  ) : null}
                  {editedCharacter.selectedTrait[1] ? (
                    <Tag className="mr-2" variant='solid' colorScheme='purple'>{editedCharacter.selectedTrait[1].label}</Tag>
                  ) : null}
                  {editedCharacter.selectedTrait[2] ? (
                    <Tag className="mr-2" variant='solid' colorScheme='purple'>{editedCharacter.selectedTrait[2].label}</Tag>
                  ) : null}
                  {editedCharacter.selectedTrait[3] ? (
                    <Tag className="mr-2" variant='solid' colorScheme='purple'>{editedCharacter.selectedTrait[3].label}</Tag>
                  ) : null}
                </div>
              </div>
            )}
          </div>
        </div>
        {!editMode && (
          <Button className="mt-10" colorScheme='blue' onClick={handleEditClick}>
            Modifier les informations
          </Button>
        )}
        {editMode && (
          <div className="space-x-3 mt-10">
            <Button colorScheme='blue' onClick={handleSaveClick}>Enregistrer</Button>
            <Button colorScheme='blue' onClick={handleCancelClick}>Annuler</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default CharacterInformation;
