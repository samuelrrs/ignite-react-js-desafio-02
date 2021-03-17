import { Button } from "./Button";

interface ContentProps {
  selectedGenre: {
    title: String;
  };
}

export function Content(props: ContentProps) {
  return (
    // Complete aqui
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {/*  {movies.map((movie) => (
          <MovieCard
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
          /> 
        ))}*/}
        </div>
      </main>
    </div>
  );
}
