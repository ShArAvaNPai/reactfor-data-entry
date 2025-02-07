import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./profile/profile";
import Header from './header/header';
import Table from "./Table/table"; 
import Useraccount from "./Useraccount/Useraccount"; 
import "./App.css";
import logo from "./logo.svg"; 

function App() {
  return (
    <>
      <div className="navigationHeader">
        <Header />
      </div>
      <Router>
        <Routes>
          <Route path="/*" element={<Profile />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Useraccount" element={<Useraccount />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
