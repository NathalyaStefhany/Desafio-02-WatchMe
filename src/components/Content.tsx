import { useEffect, useState } from "react";

import { MovieCard } from "./MovieCard";
import { api } from '../services/api';

import '../styles/content.scss';

interface MovieResponse {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  selectedGenreId: number
}

export function Content(props: ContentProps) {
  // Complete aqui
  const [movies, setMovies] = useState<MovieResponse[]>([]);

  useEffect(() => {
    api.get<MovieResponse[]>(`movies/?Genre_id=${props.selectedGenreId}`)
      .then((response: {data: MovieResponse[]}) => {
        setMovies(response.data);
      });
  }, [props.selectedGenreId])

  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard 
            key ={movie.imdbID} 
            title={movie.Title} 
            poster={movie.Poster} 
            runtime={movie.Runtime} 
            rating={movie.Ratings[0].Value} 
          />
        ))}
      </div>
    </main>
  )
}