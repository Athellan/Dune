/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateCharacter } from "../lib/controller";

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
                    <div className="input-group flex">
                      <label>Nom:</label>
                      <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="character__name font-bold"
                      />
                    </div>
                    <div className="input-group flex">
                      <label>Rôle:</label>
                      <input
                        type="text"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className="character__role"
                      />
                    </div>
                    <div className="input-group flex">
                      <label>Dicton:</label>
                      <textarea
                        value={newDicton}
                        onChange={(e) => setNewDicton(e.target.value)}
                        className="character_dicton"
                      />
                    </div>
                    <div className="input-group flex">
                      <label>Description:</label>
                      <textarea
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="character__description text-justify"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="character__name font-bold">{editedCharacter.name}</h2>
                <h3 className="character__role">{editedCharacter.role}</h3>
                <h4 className="character_dicton mb-5">"{editedCharacter.dicton}"</h4>
                <p className="character__description text-justify">{editedCharacter.description}</p>
              </>
            )}
          </div>
        </div>
        {!editMode && (
          <strong className="edit-text" onClick={handleEditClick}>
            Modifier les informations
          </strong>
        )}
        {editMode && (
          <div>
            <button className="moreinfo-btn mr-10" onClick={handleSaveClick}>Enregistrer</button>
            <button className="moreinfo-btn" onClick={handleCancelClick}>Annuler</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CharacterInformation;
