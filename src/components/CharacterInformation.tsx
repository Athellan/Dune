/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { useLocation } from "react-router-dom";

function CharacterInformation() {
  const location = useLocation();
  const [editMode, setEditMode] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState(location.state.character);


  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Effectuez ici les actions nécessaires pour enregistrer les modifications
    // Par exemple, vous pouvez appeler une fonction qui met à jour les informations du personnage dans votre backend

    setEditMode(false);
    // Ajoutez ici le code pour enregistrer les modifications
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedCharacter(location.state.character);
  };

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setEditedCharacter((prevCharacter: any) => ({
      ...prevCharacter,
      [name]: value,
    }));
  };

  return (
    <>
      <h1 className="title mb-5 mt-8">Détail du personnage</h1>
      <div className="character-preview">
        <div className="flex flex-col">
          <img src={editedCharacter.avatar} className="character-image mx-auto" />
          <div className="character-details">
            {editMode ? (
              <>
                <div className="input-group">
                  <label>Nom:</label>
                  <input
                    type="text"
                    name="name"
                    value={editedCharacter.name}
                    onChange={handleInputChange}
                    className="character__name font-bold"
                  />
                </div>
                <div className="input-group">
                  <label>Rôle:</label>
                  <input
                    type="text"
                    value={editedCharacter.role}
                    onChange={handleInputChange}
                    className="character__role"
                  />
                </div>
                <div className="input-group">
                  <label>Dicton:</label>
                  <textarea
                    name="dicton"
                    value={editedCharacter.dicton}
                    onChange={handleInputChange}
                    className="character_dicton"
                  />
                </div>
                <div className="input-group">
                  <label>Description:</label>
                  <textarea
                    name="description"
                    value={editedCharacter.description}
                    onChange={handleInputChange}
                    className="character__description text-justify"
                  />
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
