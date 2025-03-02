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
  // State to track if the randomization animation is active
  const [isRandomizing, setIsRandomizing] = useState(false);

  const handleRandomize = () => {
    // Use selected civs if any are selected, otherwise use all civs
    const pool = selectedCivs.length > 0 ? selectedCivs : civilisations;

    if (pool.length === 0) return;

    // Start the randomization animation
    setIsRandomizing(true);

    // Clear the current selection
    setRandomCiv(null);

    // Simulate the randomization effect by cycling through civilizations
    let counter = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * pool.length);
      setRandomCiv(pool[randomIndex]);

      counter++;

      // Stop after 10 iterations (about 1 second with 100ms interval)
      if (counter >= 10) {
        clearInterval(interval);
        setIsRandomizing(false);

        // Final random selection
        const finalIndex = Math.floor(Math.random() * pool.length);
        setRandomCiv(pool[finalIndex]);
      }
    }, 100);
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
          disabled={isRandomizing}
        >
          {isRandomizing ? "Randomizing..." : "Pick Random Civilization"}
        </button>
      </div>

      {randomCiv && (
        <div className={`random-result ${isRandomizing ? "animating" : ""}`}>
          <h3>Your randomly selected civilization:</h3>
          <div className="selected-civ-card">
            <div className="selected-civ-logo">
              <div className="selected-placeholder-logo">
                {randomCiv.name.charAt(0)}
              </div>
            </div>
            <div className="selected-civ-info">
              <h2 className="selected-civ-name">{randomCiv.name}</h2>
              <p className="selected-civ-description">
                {randomCiv.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Randomizer;
