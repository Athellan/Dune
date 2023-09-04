/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link
          style={{
            color: selectedButton === "liste" ? "white" : "white",
            backgroundColor:
              selectedButton === "liste" ? "rgba(48, 130, 206, 255)" : "transparent",
            borderRadius: "8px",
          }}
          to="/"
          onClick={() => handleButtonClick("liste")}
        >
          Liste de l'équipe
        </Link>
        <Link
          style={{
            color: selectedButton === "nouveau" ? "white" : "white",
            backgroundColor:
              selectedButton === "nouveau" ? "rgba(48, 130, 206, 255)" : "transparent",
            borderRadius: "8px",
          }}
          to="/newcharacter"
          onClick={() => handleButtonClick("nouveau")}
        >
          Nouveau Personnage
        </Link>
        <Link
          style={{
            color: selectedButton === "search" ? "white" : "white",
            backgroundColor:
              selectedButton === "search" ? "rgba(48, 130, 206, 255)" : "transparent",
            borderRadius: "8px",
          }}
          to="/search"
          onClick={() => handleButtonClick("search")}
        >
          Recherches
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
