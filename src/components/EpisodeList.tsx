// src/components/EpisodeList.tsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles/EpisodeList.scss";

interface Episode {
  id: string;
  title: string;
  series: string;
  seasonNumber: number;
  episodeNumber: number;
  releaseDate: string;
  imdbId: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
  const [search, setSearch] = useState("");

  // Filtra os episódios com base no texto digitado
  const filteredEpisodes = episodes.filter(
    (episode) =>
      episode.title.toLowerCase().includes(search.toLowerCase()) ||
      episode.series.toLowerCase().includes(search.toLowerCase())
  );

  const highlightMatch = (text: string) => {
    if (!search) return text; // Se não há pesquisa, retorna o texto original

    const regex = new RegExp(`(${search})`, "gi"); // Cria uma regex para destacar o texto
    const parts = text.split(regex); // Divide o texto em partes com base na pesquisa

    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      )
    ); // Retorna as partes, destacando a parte correspondente
  };

  return (
    <div className="episode-list-container">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar episódios..."
          className="search-bar"
        />
      </div>
      <div className="flex">
        <ul className="episode-list">
          {filteredEpisodes.length > 0 ? (
            filteredEpisodes.map((episode) => (
              <li key={episode.id} className="episode-item">
                {highlightMatch(episode.series)} -{" "}
                {highlightMatch(episode.title)} (S{episode.seasonNumber}, E
                {episode.episodeNumber})
              </li>
            ))
          ) : (
            <li className="no-results">No episode was found!</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EpisodeList;
