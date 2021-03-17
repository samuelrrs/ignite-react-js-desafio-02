import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: {
    title: String;
  };
  movies: {
    title: string;
    poster: string;
    ratings: Array<{
      Source: string;
      Value: string;
    }>;
    runtime: string;
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
          <MovieCard
            title={props.movies.title}
            poster={props.movies.poster}
            runtime={props.movies.poster}
            rating={props.movies.ratings[0].Value}
          />
        </div>
      </main>
    </div>
  );
}
