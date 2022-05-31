import './App.css';

import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing from "../src/pages/Landing";
import Pantry from "../src/pages/Pantry";
import Recipes from "./pages/Recipes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/pantry" element={<Pantry/>}/>
          <Route path="/recipes" element={<Recipes/>}/>

          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
