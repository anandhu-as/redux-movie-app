

export const BaseUrl = "https://api.themoviedb.org/3";
export const API_KEY = "0c32628f5c298dcb9816eefc0298de13";
export const ImageUrl = "https://image.tmdb.org/t/p/original";
const randomNumber = Math.floor(Math.random() * 100000);
export const TrendingURL = `${BaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US&random=${randomNumber}`;
export const Orginals = `${BaseUrl}/discover/tv?api_key=${API_KEY}&with_networks=214`;
export const romance=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`
