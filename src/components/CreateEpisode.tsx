import React, { useState, useEffect } from "react";
import { EpisodeInput } from "../types/Episode";
import "./styles/CreateEpisode.scss";

interface CreateEpisodeProps {
  onEpisodeAdded: (episode: EpisodeInput) => void;
  initialValues?: EpisodeInput;
}

const CreateEpisode: React.FC<CreateEpisodeProps> = ({
  onEpisodeAdded,
  initialValues,
}) => {
  const [title, setTitle] = useState("");
  const [series, setSeries] = useState("");
  const [description, setDescription] = useState("");
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const [releaseDate, setReleaseDate] = useState("");
  const [imdbId, setImdbId] = useState("");

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title || "");
      setSeries(initialValues.series || "");
      setDescription(initialValues.description || "");
      setSeasonNumber(initialValues.seasonNumber || 1);
      setEpisodeNumber(initialValues.episodeNumber || 1);
      setReleaseDate(initialValues.releaseDate || "");
      setImdbId(initialValues.imdbId || "");
    }
  }, [initialValues]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEpisode: EpisodeInput = {
      title,
      series,
      description,
      seasonNumber,
      episodeNumber,
      releaseDate,
      imdbId,
    };
    onEpisodeAdded(newEpisode);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setSeries("");
    setDescription("");
    setSeasonNumber(1);
    setEpisodeNumber(1);
    setReleaseDate("");
    setImdbId("");
  };

  return (
    <form className="form-episode--create" onSubmit={handleSubmit}>
      <h3>Create a new Episode</h3>
      <div>
        <input
          type="text"
          placeholder="Serie"
          value={series}
          onChange={(e) => setSeries(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Season"
          value={seasonNumber}
          onChange={(e) => setSeasonNumber(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Episode"
          value={episodeNumber}
          onChange={(e) => setEpisodeNumber(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="Day of Launch"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="IMDb ID"
          value={imdbId}
          onChange={(e) => setImdbId(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit">Create Episode</button>
      </div>
    </form>
  );
};

export default CreateEpisode;
