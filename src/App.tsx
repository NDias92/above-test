// src/App.tsx
import React, { useState } from "react";
import EpisodeList from "./components/EpisodeList";
import CreateEpisode from "./components/CreateEpisode";
import logo from "./img/movie-logo.png";
import "./App.scss";

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
      <div className="flex">
        <img src={logo} className="logo-image" />
      </div>
      <CreateEpisode episodes={episodes} addEpisode={addEpisode} />
      <EpisodeList episodes={episodes} />
    </div>
  );
};

export default App;
