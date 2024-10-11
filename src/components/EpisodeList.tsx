// src/components/EpisodeList.tsx
import React from "react";
import { Episode } from "../types/Episode";
import "./styles/EpisodeList.scss";

interface EpisodeListProps {
  episodes: Episode[];
  onSelect: (episode: Episode) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, onSelect }) => {
  return (
    <div className="episode-list-container">
      <ul>
        {episodes.length > 0 ? (
          episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => onSelect(episode)}
              className="episode-item"
            >
              {episode.title} - {episode.series} (S{episode.seasonNumber}, E
              {episode.episodeNumber})
            </li>
          ))
        ) : (
          <p>No Episode was Found</p>
        )}
      </ul>
    </div>
  );
};

export default EpisodeList;
