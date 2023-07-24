import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewCharacterForm from "./components/NewCharacterForm";
import NotFound from "./components/NotFound";
import Card from "./components/Card";
import CharacterDetail from "./components/CharacterDetail";
import React from "react";
const Search = React.lazy(
  () => import("./components/Search"));

function App() {
  return (
    <Routes>
      <Route path="/newcharacter" element={<NewCharacterForm />} />
      <Route path="/characters/:id" element={<CharacterDetail />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<Card />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;
