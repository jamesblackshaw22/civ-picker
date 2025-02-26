import React from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <h2>Welcome to the civilisation 7 civ picker</h2>
        <p>Randomise your games</p>
        {}
      </main>
      <Footer />
    </div>
  );
}

export default App;
