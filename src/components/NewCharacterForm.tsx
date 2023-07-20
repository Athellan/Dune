/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import Select from 'react-select';

const myTraits = [
  { label: 'Charismatique', value: 1 },
  { label: 'Intelligent', value: 2 },
  { label: 'Audacieux', value: 3 },
  { label: 'Honnête', value: 4 },
  { label: 'Égoïste', value: 5 },
  { label: 'Courageux', value: 6 },
  { label: 'Mystérieux', value: 7 },
  { label: 'Loyal', value: 8 },
  { label: 'Manipulateur', value: 9 },
  { label: 'Sage', value: 10 },
  { label: 'Impulsif', value: 11 },
  { label: 'Bienveillant', value: 12 },
  { label: 'Sociable', value: 13 },
  { label: 'Solitaire', value: 14 },
  { label: 'Aventureux', value: 15 },
  { label: 'Calculateur', value: 16 },
  { label: 'Idéaliste', value: 17 },
  { label: 'Excentrique', value: 18 },
  { label: 'Déterminé', value: 19 },
  { label: 'Noble', value: 20 },
  { label: 'Sarcastique', value: 21 },
  { label: 'Sensible', value: 22 },
  { label: 'Intrépide', value: 23 },
  { label: 'Perfectionniste', value: 24 },
  { label: 'Humble', value: 25 },
  { label: 'Curieux', value: 26 },
  { label: 'Impatient', value: 27 },
  { label: 'Généreux', value: 28 },
  { label: 'Imperturbable', value: 29 },
  { label: 'Créatif', value: 30 },
];

const mySkills = [
  { label: 'Analyse de données', value: 1 },
  { label: 'botanique', value: 2 },
  { label: 'Bureaucratie du CHOM', value: 3 },
  { label: 'Chirurgie', value: 4 },
  { label: 'Contrebande', value: 5 },
  { label: 'Cultures', value: 6 },
  { label: 'Déductions', value: 7 },
  { label: 'Ecologie', value: 8 },
  { label: 'Etiquette', value: 9 },
  { label: 'Géologie', value: 10 },
  { label: 'Kanly', value: 11 },
  { label: 'Langage corporel', value: 12 },
  { label: 'Maladies infectieuses', value: 13 },
  { label: `Médecine d'urgence'`, value: 14 },
  { label: 'Philosophie', value: 15 },
  { label: 'Physique', value: 16, },
  { label: 'Pièges', value: 17 },
  { label: 'Poisons', value: 18 },
  { label: 'politique des maisons', value: 19 },
  { label: 'politique impériale', value: 20 },
  { label: 'Psychiatrie', value: 21 },
  { label: 'Religion', value: 22 },
  { label: 'Sixième sens', value: 23 },
  { label: 'Technologie de pointe', value: 24 },
  { label: 'Virologie', value: 25 }
];


function NewCharacterForm() {


  const [selectedTrait, setSelectedTrait] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

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
          <label>Traits de personnalité:</label>
          <Select
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
          <label>Compétence Annexes (max 4) :</label>
          <Select
            options={mySkills}
            isMulti
            onChange={handleSkillChange}
            value={selectedSkill}
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