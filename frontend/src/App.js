import './App.css';

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "../src/pages/Landing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
