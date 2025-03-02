import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CivTable from "./components/CivTable";
import Randomiser from "./components/Randomiser";
import { civilisations } from "./data/civData";
import { Civilisation } from "./types";
import "./App.css";

function App() {
  // State to track selected civilizations
  const [selectedCivs, setSelectedCivs] = useState<Civilisation[]>([]);

  // Handler for when civilization selection changes
  const handleSelectionChange = (selected: Civilisation[]) => {
    setSelectedCivs(selected);
  };

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <h2>Welcome to the Civilization 7 Civ Picker</h2>
        <p>Select civilizations you want to include and randomize your games</p>

        {/* Randomizer component */}
        <Randomiser civilisations={civilisations} selectedCivs={selectedCivs} />

        {/* CivTable with selection capability */}
        <CivTable
          civilisations={civilisations}
          onSelectionChange={handleSelectionChange}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
