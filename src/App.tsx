import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewCharacterForm from "./components/NewCharacterForm";
import NotFound from "./components/NotFound";
import Card from "./components/Card";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <Routes>
      <Route path="/newcharacter" element={<NewCharacterForm />} />
      <Route path="/character/:name" element={<CharacterDetail />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<Card />} />
    </Routes>
  );
}

export default App;
