import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewCharacterForm from "./components/NewCharacterForm";
import NotFound from "./components/NotFound";
import Card from "./components/Card";
import CharacterInformation from "./components/CharacterInformation";

function App() {
  return (
    <Routes>
      <Route path="/newcharacter" element={<NewCharacterForm />} />
      <Route path="/character/:id" element={<CharacterInformation />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<Card />} />
    </Routes>
  );
}

export default App;
