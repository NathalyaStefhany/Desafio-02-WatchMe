import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Header } from './components/Header';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        selectedGenreId={selectedGenreId} 
        setSelectedGenreId={setSelectedGenreId}
      />

      <div className="container">
        <Header selectedGenreId={selectedGenreId} />

        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  )
}