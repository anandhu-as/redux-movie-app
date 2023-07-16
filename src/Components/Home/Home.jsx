import React from "react";
import { useSelector } from "react-redux";
import Movies from "../../pages/Movies";
const Home = () => {
  const { movieData } = useSelector((state) => state.movies);
  return <Movies movieData={movieData} />;
};

export default Home;
