import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  //  console.log(movies);
  return (
    <div className="Home">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {movies.map((it) => (
            <Movie
              key={it.id}
              id={it.id}
              coverImg={it.medium_cover_image}
              title={it.title}
              summary={it.summary}
              genres={it.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

//return에 {} 넣으면 js사용
