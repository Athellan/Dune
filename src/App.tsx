import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewCharacterForm from "./components/NewCharacterForm";
import NotFound from "./components/NotFound";
import CharacterList from "./components/CharacterList";
import CharacterInformation from "./components/CharacterInformation";
import Search from "./components/Search";

function App() {
  return (
    <Routes>
      <Route path="/newcharacter" element={<NewCharacterForm />} />
      <Route path="/character/:id" element={<CharacterInformation />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<CharacterList />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;