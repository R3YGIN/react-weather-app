import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Components/Home";
import MonthStatisctics from "./pages/MonthStatisctics/Components/MonthStatisctics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";

function App() {
  return (
    <div className="global-container">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatisctics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
