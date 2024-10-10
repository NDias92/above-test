// src/App.tsx
import React, { useState } from "react";
import EpisodeList from "./components/EpisodeList";
import CreateEpisode from "./components/CreateEpisode";

interface Episode {
  id: string;
  title: string;
  series: string;
  seasonNumber: number;
  episodeNumber: number;
  releaseDate: string;
  imdbId: string;
}

const App: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([
    {
      id: "1",
      title: "Pilot",
      series: "Breaking Bad",
      seasonNumber: 1,
      episodeNumber: 1,
      releaseDate: "2008-01-20",
      imdbId: "tt0903747",
    },
    {
      id: "2",
      title: "Cat's in the Bag...",
      series: "Breaking Bad",
      seasonNumber: 1,
      episodeNumber: 2,
      releaseDate: "2008-01-27",
      imdbId: "tt1054724",
    },
  ]);

  const addEpisode = (newEpisode: Episode) => {
    setEpisodes((prevEpisodes) => [...prevEpisodes, newEpisode]);
  };

  return (
    <div className="App">
      <h1>Gerenciador de Episódios de TV</h1>
      {/* Passa a lista de episódios existentes para o CreateEpisode */}
      <CreateEpisode episodes={episodes} addEpisode={addEpisode} />
      {/* Passa a lista de episódios para o EpisodeList */}
      <EpisodeList episodes={episodes} />
    </div>
  );
};

export default App;
