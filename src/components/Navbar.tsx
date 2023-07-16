import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setSelectedButton(buttonName);
  };

  return (
    <div className="navbar">
      <div className="links">
        <Link
          style={{
            color: selectedButton === "liste" ? "white" : "rgb(77, 77, 77)",
            backgroundColor:
              selectedButton === "liste" ? "rgb(77, 77, 77)" : "transparent",
            borderRadius: "8px",
          }}
          to="/"
          onClick={() => handleButtonClick("liste")}
        >
          Liste de l'équipe
        </Link>
        <Link
          style={{
            color: selectedButton === "nouveau" ? "white" : "rgb(77, 77, 77)",
            backgroundColor:
              selectedButton === "nouveau" ? "rgb(77, 77, 77)" : "transparent",
            borderRadius: "8px",
          }}
          to="/newcharacter"
          onClick={() => handleButtonClick("nouveau")}
        >
          Nouveau Personnage
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
