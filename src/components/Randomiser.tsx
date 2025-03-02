import React, { useState } from "react";
import { Civilisation } from "../types";
import "./Randomiser.css";

interface RandomizerProps {
  civilisations: Civilisation[];
  selectedCivs: Civilisation[];
}

const Randomizer = ({ civilisations, selectedCivs }: RandomizerProps) => {
  // State to store the randomly selected civilization
  const [randomCiv, setRandomCiv] = useState<Civilisation | null>(null);

  const handleRandomize = () => {
    // Use selected civs if any are selected, otherwise use all civs
    const pool = selectedCivs.length > 0 ? selectedCivs : civilisations;

    if (pool.length === 0) return;

    // Simple random selection 
    const randomIndex = Math.floor(Math.random() * pool.length);
    setRandomCiv(pool[randomIndex]);
  };

  return (
    <div className="randomizer-container">
      <div className="randomizer-controls">
        <p>
          {selectedCivs.length === 0
            ? "All civilizations are available for randomization"
            : `${selectedCivs.length} civilization(s) selected for randomization`}
        </p>
        <button
          className="randomize-button"
          onClick={handleRandomize}
        >
          Pick Random Civilization
        </button>
      </div>

      {randomCiv && (
        <div className="random-result">
          <h3>Your randomly selected civilization:</h3>
          <div className="selected-civ-card">
            <div className="selected-civ-logo">
              <div className="selected-placeholder-logo">
                {randomCiv.name.charAt(0)}
              </div>
            </div>
            <div className="selected-civ-info">
              <h2 className="selected-civ-name">{randomCiv.name}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Randomizer;