import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const movieApi = await fetch(
        `https://www.omdbapi.com/?apikey=202a113f&s=5000&short=full`
      );
      const res = await movieApi.json();
      const data = await res.Search;
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {movie && (
        <div className="max-w-7xl mx-auto m-10">
          <div className="flex flex-col justify-center items-center sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {movie.map((movie) => (
              <Card movie={movie} key={movie.imdbID} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
