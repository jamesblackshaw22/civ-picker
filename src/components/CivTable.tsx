import React from "react";
import { Civilisation } from "../types";
import "./CivTable.css";

interface CivTableProps {
  civilisations: Civilisation[];
}

const CivTable = ({ civilisations }: CivTableProps) => {
  return (
    <div className="civs-table-container">
      <h3>Available Civs</h3>

      <div className="civs-table">
        {civilisations.map((civ) => (
          <div key={civ.id} className="civ-card">
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
