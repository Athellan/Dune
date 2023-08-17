/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateCharacter } from "../lib/controller";
import { Button, Input, Textarea, Tag, Progress, Text } from "@chakra-ui/react";

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
  const [newMainSkill, setNewMainSkill] = useState(editedCharacter.mainSkill);
  const [newSecondarySkill, setNewSecondarySkill] = useState(editedCharacter.secondarySkill);
  const [newFaction, setNewFaction] = useState(editedCharacter.faction);
  const [newAmbition, setNewAmbition] = useState(editedCharacter.ambition);
  const [newLevel, setNewLevel] = useState(editedCharacter.level);

  const id = location.state.character.id

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    updateCharacter(id, {
      avatar: newAvatar,
      description: newDescription,
      name: newName,
      dicton: newDicton,
      role: newRole,
      faction: newFaction,
      ambition: newAmbition,
      mainSkill: newMainSkill,
      secondarySkill: newSecondarySkill,
      level: newLevel * 10,
    });
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
    setNewFaction(editedCharacter.faction);
    setNewMainSkill(editedCharacter.mainSkill);
    setNewSecondarySkill(editedCharacter.secondarySkill);
    setEditedCharacter(location.state.character);
  };

  return (
    <>
      <h1 className="title mb-5 mt-8">Détails du personnage</h1>
      <div className="character-preview">
        <div className="flex flex-col">
          <img src={editedCharacter.avatar} className="character-image mx-auto mt-5" />
          <hr className="border-t border-black mx-auto w-4/6" />
          <div className="mb-5">
            <Text>Niveau : {(editedCharacter.level) / 10}</Text>
            <Progress className="mx-40" value={editedCharacter.level} />
          </div>
          <div className="">
            {editMode ? (
              <>
                <div className="p-5">
                  <div className="flex flex-col space-y-5">
                    <div className="flex">
                      <label className="mr-36">Nom:</label>
                      <div className="flex flex-grow">
                        <Input
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          className="character__name font-bold flex-grow-1"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="mr-32">Level:</label>
                      <div className="flex flex-grow">
                        <Input
                          type="text"
                          value={newLevel >= 10 ? (newLevel / 10).toString() : newLevel}
                          onChange={(e) => {
                            const inputValue = e.target.value;
                            setNewLevel(inputValue);
                          }}
                          className="character__role flex-grow-1 ml-3"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="mr-36">Rôles:</label>
                      <div className="flex flex-grow">
                        <Input
                          type="text"
                          value={newRole}
                          onChange={(e) => setNewRole(e.target.value)}
                          className="character__role flex-grow-1"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="mr-32">Dicton:</label>
                      <div className="flex flex-grow">
                        <Textarea
                          value={newDicton}
                          onChange={(e) => setNewDicton(e.target.value)}
                          className="character_dicton flex-grow-1 ml-1"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="mr-24">Description:</label>
                      <div className="flex flex-grow">
                        <Textarea
                          value={newDescription}
                          onChange={(e) => setNewDescription(e.target.value)}
                          className="character__description text-justify flex-grow-1"
                          rows={10}
                        />
                      </div>
                    </div>
                    {/* Nouveaux champs ajoutés */}
                    <div className="flex">
                      <label className="mr-28">Faction:</label>
                      <div className="flex flex-grow">
                        <Input
                          type="text"
                          value={newFaction}
                          onChange={(e) => setNewFaction(e.target.value)}
                          className="character__faction flex-grow-1 ml-3"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="mr-28">Ambition:</label>
                      <div className="flex flex-grow">
                        <Input
                          type="text"
                          value={newAmbition}
                          onChange={(e) => setNewAmbition(e.target.value)}
                          className="character__ambition flex-grow-1 ml-0.5"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="mr-2.5 mt-2">Compétence Principale :</label>
                      <div className="flex flex-grow">
                        <Input
                          type="text"
                          value={newMainSkill}
                          onChange={(e) => setNewMainSkill(e.target.value)}
                          className="character__main-skill flex-grow-1"
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <label className="mt-2">Compétence Secondaire :</label>
                      <div className="flex flex-grow">
                        <Input
                          type="text"
                          value={newSecondarySkill}
                          onChange={(e) => setNewSecondarySkill(e.target.value)}
                          className="character__secondary-skill flex-grow-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </>
            ) : (
              <div className="space-y-3 px-5">
                <h2 className="character__name font-bold">{editedCharacter.name}</h2>
                <h3 className="character__role">{editedCharacter.role}</h3>
                <h4 className="character_dicton">"{editedCharacter.dicton}"</h4>
                <h3 className="character__faction">Ma faction : {editedCharacter.faction}</h3>
                <h3 className="character__ambition">Mon ambition : {editedCharacter.ambition}</h3>
                <p className="character__description max-w-xxl">{editedCharacter.description}</p>
                <div className="!mt-5">
                  <h4 className="underline mb-2">Compétence Principale | Compétence Secondaire</h4>
                  <Tag className="mr-2" variant='solid' colorScheme='red'>{editedCharacter.mainSkill}</Tag>
                  <Tag className="mr-2" variant='solid' colorScheme='blue'>{editedCharacter.secondarySkill}</Tag>
                </div>
                <h4 className="underline">Compétences Annexes</h4>
                <div className="skills">
                  {editedCharacter.selectedSkill.map((skill: any, index: any) => (
                    <Tag key={index} className="mr-2" variant='solid' colorScheme='orange'>
                      {skill.label}
                    </Tag>
                  ))}
                </div>
                <h4 className="underline">Traits</h4>
                <div className="traits">
                  {editedCharacter.selectedTrait.map((trait: any, index: any) => (
                    <Tag key={index} className="mr-2" variant='solid' colorScheme='purple'>
                      {trait.label}
                    </Tag>
                  ))}
                </div>
                <h4 className="underline">Principes</h4>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.principeDevoir}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsDevoir}</Tag>
                  <Tag className="flex-1">{editedCharacter.maximeDevoir}</Tag>
                </div>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.principeDomination}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsDomination}</Tag>
                  <Tag className="flex-1">{editedCharacter.maximeDomination}</Tag>
                </div>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.principeFoi}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsFoi}</Tag>
                  <Tag className="flex-1">{editedCharacter.maximeFoi}</Tag>
                </div>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.principeJustice}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsJustice}</Tag>
                  <Tag className="flex-1">{editedCharacter.maximeJustice}</Tag>
                </div>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.principeVerite}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsVerite}</Tag>
                  <Tag className="flex-1">{editedCharacter.maximeVerite}</Tag>
                </div>
                <h4 className="underline">Compétences</h4>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.competenceAnalyse}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsAnalyse}</Tag>
                  <Tag className="flex-1">{editedCharacter.speAnalyse}</Tag>
                </div>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.competenceCombat}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsCombat}</Tag>
                  <Tag className="flex-1">{editedCharacter.speCombat}</Tag>
                </div>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.competenceDiscipline}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsDiscipline}</Tag>
                  <Tag className="flex-1">{editedCharacter.speDiscipline}</Tag>
                </div>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.competenceMobilite}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsMobilite}</Tag>
                  <Tag className="flex-1">{editedCharacter.speMobilite}</Tag>
                </div>
                <div className="flex flex-row space-x-2 justify-center">
                  <Tag className="flex-1">{editedCharacter.competenceRhetorique}</Tag>
                  <Tag className="ml-auto">{editedCharacter.pointsRhetorique}</Tag>
                  <Tag className="flex-1">{editedCharacter.speRhetorique}</Tag>
                </div>
                <h4 className="underline">Talents</h4>
                <div>
                  {editedCharacter.talent.map((talent: any, index: any) => (
                    <Tag colorScheme='telegram' key={index}>{talent}</Tag>
                  ))}
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
