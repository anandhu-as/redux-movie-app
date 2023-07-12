import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import WatchList from "../Components/WatchList/WatchList";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
