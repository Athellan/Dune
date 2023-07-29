/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import Select from 'react-select';
import { mySkills, myTraits } from "../types/data";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { useNavigate } from "react-router-dom";
import { addCharacter } from "../lib/controller";
import { Box, Button, Grid, Input, Textarea } from "@chakra-ui/react";

function NewCharacterForm() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState('');
  const [role, setRole] = useState('');
  const [faction, setFaction] = useState('');
  const [ambition, setAmbition] = useState('');
  const [mainSkill, setMainSkill] = useState('');
  const [secondarySkill, setSecondarySkill] = useState('');
  const [selectedTrait, setSelectedTrait] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [talent, setTalent] = useState([]);
  const [description, setDescritpion] = useState("");

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
      avatar,
      role,
      faction,
      ambition,
      mainSkill,
      secondarySkill,
      selectedTrait,
      selectedSkill,
      talent,
      description
    });
    navigate("/");
    console.log("addNewCharacter");
  }


  return (

    <div className="card width=150%">
      <h1 className="mt-8 mb-8">Création de ton personnage</h1>
      <div className="form">
        <form onSubmit={(e) => addNewCharacter(e)}>
          <label className="mb-2">Nom du Personnage :</label>
          <Input
            className="mb-5"
            bg='white'
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Lien de l'avatar :</label>
          <Input
            className="mb-5"
            bg='white'
            type="text"
            required
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <label>Description :</label>
          <Textarea
            bg='white'
            id="description"
            maxLength={682}
            required
            value={description}
            onChange={(e) => setDescritpion(e.target.value)}
            className="w-full mb-5 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
            rows={5}
          />
          <label>Role :</label>
          <Input
            className="mb-5"
            bg='white'
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <label>Faction :</label>
          <Input
            className="mb-5"
            bg='white'
            required
            value={faction}
            onChange={(e) => setFaction(e.target.value)}
          />
          <label className="mb-2">Traits de personnalité:</label>
          <Select
            placeholder="Choisis tes traits de personnalité"
            className="mb-5"
            options={myTraits}
            isMulti
            onChange={handleTraitChange}
            value={selectedTrait}
          />
          <label>Ambition :</label>
          <Input
            className="mb-5"
            bg='white'
            required
            value={ambition}
            onChange={(e) => setAmbition(e.target.value)}
          />
          <label>Compétence Principale :</label>
          <Input
            className="mb-5"
            bg='white'
            type="text"
            required
            value={mainSkill}
            onChange={(e) => setMainSkill(e.target.value)}
          />
          <label>Compétence Secondaire :</label>
          <Input
            className="mb-5"
            bg='white'
            type="text"
            required
            value={secondarySkill}
            onChange={(e) => setSecondarySkill(e.target.value)}
          />
          <label className="mb-2">Compétence Annexes (max 4) :</label>
          <Select
            placeholder="Choisis tes compétences annexes"
            className="mb-5"
            options={mySkills}
            isMulti
            onChange={handleSkillChange}
            value={selectedSkill}
          />
          <label className="mb-2">Talents :</label>
          <TagsInput
            className="mb-16 bg-white w-full border !border-gray-300 rounded block !text-black !font-medium"
            value={talent}
            onChange={handleTalentChange}
          />
          {/* Box Principes */}
          <Box border="1px solid white" p={4} borderRadius="md" className="mb-5">
            <Grid templateColumns='repeat(3, 1fr)' gap={2}>
              <div>
                <label style={{ textAlign: 'center', fontSize: '30px' }}>Principe</label>
              </div>
              <div>
                <label style={{ textAlign: 'center', fontSize: '30px' }}>Points</label>
              </div>
              <div>
                <label style={{ textAlign: 'center', fontSize: '30px' }}>Maxime</label>
              </div>
              <div>
                <label style={{ textAlign: 'left' }}>Devoir</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
              <div>
                <label>Domination</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
              <div>
                <label>Foi</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
              <div>
                <label>Justice</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
              <div>
                <label>Vérité</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>1</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
            </Grid>
          </Box>
          {/* End Box Principes */}

          {/* Box Specialisations */}
          <Box border="1px solid white" p={4} borderRadius="md" className="mb-5">
            <Grid templateColumns='repeat(3, 1fr)' gap={2}>
              <div>
                <label style={{ textAlign: 'center', fontSize: '30px' }}>Compétence</label>
              </div>
              <div>
                <label style={{ textAlign: 'center', fontSize: '30px' }}>Points</label>
              </div>
              <div>
                <label style={{ textAlign: 'center', fontSize: '30px' }}>Spécialisations</label>
              </div>
              <div>
                <label style={{ textAlign: 'left' }}>Analyse</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
              <div>
                <label>Combat</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
              <div>
                <label>Discipline</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
              <div>
                <label>Mobilité</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
              <div>
                <label>Rhétorique</label>
                <Input w='100%' h='10' bg='white' placeholder="1" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="2" />
              </div>
              <div>
                <label style={{ color: 'transparent' }}>.</label>
                <Input w='100%' h='10' bg='white' placeholder="3" />
              </div>
            </Grid>
          </Box>
          {/* End Box Specialisations */}


          <Button className="mt-3" colorScheme='blue'>Sauvegarder</Button>
        </form>
      </div>
    </div >
  );
}

export default NewCharacterForm;