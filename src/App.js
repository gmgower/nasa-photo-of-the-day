import React from "react";
import "./App.css";

import PhotoCard from './Components/PhotoCard.component'

import axios from 'axios';

function App() {

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoCard 
          title="Placeholder title" 
          url="Placeholder url"
          explanation="placeholder explanation"
          />
    
    </div>
  );
}

export default App;
