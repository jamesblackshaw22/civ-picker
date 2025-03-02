import React, { useState } from "react";
import { Civilisation } from "../types";
import "./CivTable.css";

interface CivTableProps {
  civilisations: Civilisation[];
  onSelectionChange?: (selectedCivs: Civilisation[]) => void;
}

const CivTable = ({ civilisations, onSelectionChange }: CivTableProps) => {
  const [selectedCivs, setSelectedCivs] = useState<string[]>([]);

  const toggleSelection = (civId: string) => {
    setSelectedCivs((prevSelected) => {
      //If already selected remove it from selected array
      const newSelected = prevSelected.includes(civId)
        ? prevSelected.filter((id) => id != civId)
        : [...prevSelected, civId]; //if not, add it

      //Callback to parent component to notify of selection change
      if (onSelectionChange) {
        const selectedCivilisations = civilisations.filter((civ) =>
          newSelected.includes(civ.id)
        );
        onSelectionChange(selectedCivilisations);
      }
      return newSelected;
    });
  };

  return (
    <div className="civs-table-container">
      <h3>Available Civs</h3>
      <p>Click on a civ to select/deselect as a civ candidate</p>
      <div className="civs-table">
        {civilisations.map((civ) => (
          <div
            key={civ.id}
            className={`civ-card ${
              selectedCivs.includes(civ.id) ? "selected" : ""
            }`}
            onClick={() => toggleSelection(civ.id)}
          >
            <div className="civ-logo">
              <div className="placeholder-logo">{civ.name.charAt(0)}</div>
            </div>
            <div className="civ-info">
              <h4 className="civ-name">{civ.name}</h4>
              <p className="civ-description">{civ.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CivTable;
