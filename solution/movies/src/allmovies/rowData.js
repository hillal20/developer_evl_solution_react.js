import axios from "axios";
import keys from "../keys";

const fetchPopularMovies = async () => {
  const promise = await Promise.all([
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        keys.keys.API_KEY
      }&language=en-US`
    ),
    axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        keys.keys.API_KEY
      }&language=en-US`
    ),
    axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        keys.keys.API_KEY
      }&language=en-US`
    ),
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        keys.keys.API_KEY
      }&language=en-US&page=900`
    )
  ]);

  const data1 = await promise[0].data.results;
  const data2 = await promise[1].data.results;
  const data3 = await promise[2].data.results;
  const data4 = await promise[3].data.results;

  return [data1, data2, data3, data4];
};

export default fetchPopularMovies;
