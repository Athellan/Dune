/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import Select from 'react-select';
import { mySkills, myTraits } from "../types/data";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { useNavigate } from "react-router-dom";
import { addCharacter } from "../lib/controller";

function NewCharacterForm() {

  const navigate = useNavigate();

  // form states
  const [name, setName] = useState("");
  const [avatarLink, setAvatarLink] = useState('');
  const [role, setRole] = useState('');
  const [faction, setFaction] = useState('');
  const [ambition, setAmbition] = useState('');
  const [mainSkill, setMainSkill] = useState('');
  const [secondarySkill, setSecondarySkill] = useState('');
  const [selectedTrait, setSelectedTrait] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [talent, setTalent] = useState([]);
  // end form states

  const handleTalentChange = (newTalent: any) => {
    setTalent(newTalent);
  };

  const handleTraitChange = (selectedTrait: any) => {
    setSelectedTrait(selectedTrait);
  };

  const handleSkillChange = (selectedSkill: any) => {
    setSelectedSkill(selectedSkill);
  };

  const addNewCharacter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void addCharacter({
      name,
      avatarLink,
      role,
      faction,
      ambition,
      mainSkill,
      secondarySkill,
      selectedTrait,
      selectedSkill,
      talent,
    });
    navigate("/");
    console.log("addNewCharacter");
  }


  return (

    <div className="card">
      <h1 className="mb-8">Création de ton personnage</h1>
      <div className="create">
        <form onSubmit={(e) => addNewCharacter(e)}>
          <label>Nom du Personnage :</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Lien de l'avatar :</label>
          <input
            type="text"
            required
            value={avatarLink}
            onChange={(e) => setAvatarLink(e.target.value)}
          />
          <label>Maison :</label>
          <input
            disabled
            value="Vesperia"
          ></input>
          <label>Role :</label>
          <input
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          ></input>
          <label>Faction :</label>
          <input
            required
            value={faction}
            onChange={(e) => setFaction(e.target.value)}
          ></input>
          <label className="mb-2">Traits de personnalité:</label>
          <Select
            className="mb-2"
            options={myTraits}
            isMulti
            onChange={handleTraitChange}
            value={selectedTrait}
          />
          <label>Ambition :</label>
          <input
            required
            value={ambition}
            onChange={(e) => setAmbition(e.target.value)}
          ></input>
          <label>Compétence Principale :</label>
          <input
            type="text"
            required
            value={mainSkill}
            onChange={(e) => setMainSkill(e.target.value)}
          />
          <label>Compétence Secondaire :</label>
          <input
            type="text"
            required
            value={secondarySkill}
            onChange={(e) => setSecondarySkill(e.target.value)}
          />
          <label className="mb-2">Compétence Annexes (max 4) :</label>
          <Select
            className="mb-2"
            options={mySkills}
            isMulti
            onChange={handleSkillChange}
            value={selectedSkill}
          />
          <label className="mb-2">Talents :</label>
          <TagsInput
            className="p-2 mb-2 bg-white w-full border !border-gray-300 rounded block !text-black !font-medium"
            value={talent}
            onChange={handleTalentChange}
          />
          <button className="moreinfo-btn">Sauvegarder</button>
        </form>
      </div>
    </div >
  );
}

export default NewCharacterForm;
{/* <label>Dropdown</label>
          <select >
            <option value="Room Only">Room Only</option>
            <option value="Room with Breakfast included">
              Room with Breakfast included
            </option>
            <option value="Local Charges Payable at Hotel">
              Local Charges Payable at Hotel
            </option>
            <option value="Free Parking for all guests">
              Free Parking for all guests
            </option>
            <option value="Free WiFi">Free WiFi</option>
            <option value="Spa and wellness centre included">
              Spa and wellness centre included
            </option>
            <option value="Private parking at the hotel">
              Private parking at the hotel
            </option>
            <option value="Restaurant & Bar">Restaurant & Bar</option>
            <option value="Swimming pool">Swimming pool</option>
            <option value="Room and Parking">Room and Parking</option>
          </select> */}