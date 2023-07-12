import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import WatchList from "../Components/WatchList/WatchList";
import About from "../pages/About";
import Loader from "../Components/Loader/Loader";
const MovieLoader=Loader(Home)
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MovieLoader/>} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
