import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Queens from "./Queens";
import Card from "./Card";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          {Queens.map(i => (
            <Card {...i} />
          ))}
        </p>
      </header>
    </div>
  );
};

export default App;
