/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import Select from 'react-select';
import { mySkills, myTraits } from "../types/data";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

function NewCharacterForm() {


  const [selectedTrait, setSelectedTrait] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [talent, setTalent] = useState([]);

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
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          />
          <label>Lien de l'avatar :</label>
          <input
            type="text"
            required
          // value={location}
          // onChange={(e) => setLocation(e.target.value)}
          />
          <label>Maison :</label>
          <input
            disabled
            value="Vesperia"
          // onChange={(e) => setDescription(e.target.value)}
          ></input>
          <label>Role :</label>
          <input
            required
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          ></input>
          <label>Faction :</label>
          <input
            required
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
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
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          ></input>
          <label>Compétence Principale :</label>
          <input
            type="text"
            required
          // value={country}
          // onChange={(e) => setCountry(e.target.value)}
          />
          <label>Compétence Secondaire :</label>
          <input
            type="text"
            required
          // value={region}
          // onChange={(e) => setRegion(e.target.value)}
          />

          {/* <label>Number of Reviews:</label>
          <input
            type="number"
            required
            min="1"
            max="1000"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          /> */}
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