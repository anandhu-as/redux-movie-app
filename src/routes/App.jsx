import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import WatchList from "../Components/WatchList/WatchList";
import Loader from "../Components/Loader/Loader";
import Login from "../Components/Login/Login";
import RequiredAuth from "../Components/Login/RequiredAuth";
import UserDetail from "../pages/UserDetail";
import Liked from "../Components/Liked/Liked";
const MovieLoader = Loader(Home); // higher order components
const LoginLoader = Loader(Login); //
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <RequiredAuth>
                {" "}
                {/* protected routes */}
                <div>
                  <NavBar />
                  <MovieLoader />
                </div>
              </RequiredAuth>
            }
          />
          <Route
            path="/watchlist"
            element={
              <RequiredAuth>
                <div>
                  <NavBar />
                  <WatchList />
                </div>
              </RequiredAuth>
            }
          />

          <Route
            path="/details"
            element={
              <RequiredAuth>
                <div>
                  <NavBar />
                  <UserDetail />
                </div>
              </RequiredAuth>
            }
          />
          <Route
            path="/liked"
            element={
              <RequiredAuth>
                <div>
                  <NavBar />
                  <Liked />
                </div>
              </RequiredAuth>
            }
          />
          <Route path="/" element={<LoginLoader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
