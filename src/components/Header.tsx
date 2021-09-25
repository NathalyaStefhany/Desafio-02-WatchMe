import {useEffect, useState} from 'react';

import { api } from '../services/api';

interface GenreResponse {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface HeaderProps {
  selectedGenreId: number
}

export function Header(props: HeaderProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponse>({} as GenreResponse);

  useEffect(() => {
    api.get<GenreResponse>(`genres/${props.selectedGenreId}`).then((response: {data: GenreResponse}) => {
      setSelectedGenre(response.data);
    })
  }, [props.selectedGenreId]);

  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}   