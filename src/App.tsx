import React from "react";
import "./App.css";
import NameList from "./NameList";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <NameList/>
    </div>
  );
};

export default App;
