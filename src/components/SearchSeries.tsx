import React, { useState } from "react";
import "./styles/SearchEpisode.scss";

interface SearchEpisodeProps {
  onSearch: (series: string, episodeTitle: string, imdbId: string) => void;
}

const SearchEpisode: React.FC<SearchEpisodeProps> = ({ onSearch }) => {
  const [series, setSeries] = useState("");
  const [episodeTitle, setEpisodeTitle] = useState("");
  const [imdbId, setImdbId] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(series, episodeTitle, imdbId);
  };

  return (
    <form className="form-episode--search" onSubmit={handleSearch}>
      <h3>Find Episode</h3>
      <div>
        <input
          type="text"
          placeholder="Name of the Serie (opcional)"
          value={series}
          onChange={(e) => setSeries(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Episode number (opcional)"
          value={episodeTitle}
          onChange={(e) => setEpisodeTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="IMDb ID (opcional)"
          value={imdbId}
          onChange={(e) => setImdbId(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Find</button>
      </div>
    </form>
  );
};

export default SearchEpisode;
