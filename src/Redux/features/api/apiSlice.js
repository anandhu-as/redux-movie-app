/*import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, BaseUrl } from "../../../Constants/url";
const randomNumber = Math.floor(Math.random() * 100000);
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => `/trending/all/week?api_key=${API_KEY}&language=en-US&random=${randomNumber}`,
    }),
  }),
});
export const { useGetAllMoviesQuery } = movieApi*/
