import { useEffect, useState } from "react";

export default function Card({ movie }) {
  const [showModle, setShowModle] = useState(false);
  const [movieShow, setMovieShow] = useState(false);
  const [loading, setloadig] = useState(true);

  const showMovie = async (e) => {
    const id = e;
    setShowModle(!showModle);

    try {
      setloadig(false);
      const fetchMovieShow = await fetch(
        `https://www.omdbapi.com/?apikey=202a113f&i=${id}&plot=full`
      );
      const res = await fetchMovieShow.json();
      setMovieShow(res);
      setloadig(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-50 boder-2 border-black shadow-2xl h-full p-5 rounded-lg flex flex-col justify-between">
      <div className="">
        <h1 className="font-bold">{movie?.Year}</h1>
        <img src={movie?.Poster} alt="" className="" />
        {movie && <h1 className="">{movie?.Title}</h1>}
      </div>
      <div className="">
        <button
          className="cursor-pointer hover:text-pink-700"
          onClick={() => showMovie(movie?.imdbID)}
        >
          Show More...
        </button>
        {showModle && (
          <div className="">
            <div className="fixed inset-0 z-50 flex items-center justify-center ">
              <div className="max-w-3xl bg-slate-50 p-10">
                {loading ? (
                  <div className="flex items-center justify-center flex-col">
                    <h1>{movieShow.Title}</h1>
                    <img src={movieShow.Poster} alt="" />
                  </div>
                ) : (
                  <div className="">loading</div>
                )}
                <div className="flex items-center justify-center m-5">
                  <button
                    className=" bg-rose-700 px-2 py-1 text-white"
                    onClick={() => setShowModle(!showModle)}
                  >
                    Cancle
                  </button>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 bg-black opacity-35 z-20"></div>
          </div>
        )}
      </div>
    </div>
  );
}
