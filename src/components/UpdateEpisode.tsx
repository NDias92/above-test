import React, { useState } from "react";
import { Episode } from "../types/Episode";
import "./styles/UpdateEpisode.scss";

interface UpdateEpisodeProps {
  episode: Episode;
  onEpisodeUpdated: (episode: Episode) => void;
  onDelete: (id: string) => void;
}

const UpdateEpisode: React.FC<UpdateEpisodeProps> = ({
  episode,
  onEpisodeUpdated,
  onDelete,
}) => {
  const [title, setTitle] = useState(episode.title);
  const [series, setSeries] = useState(episode.series);
  const [description, setDescription] = useState(episode.description);
  const [seasonNumber, setSeasonNumber] = useState(episode.seasonNumber);
  const [episodeNumber, setEpisodeNumber] = useState(episode.episodeNumber);
  const [releaseDate, setReleaseDate] = useState(episode.releaseDate);
  const [imdbId, setImdbId] = useState(episode.imdbId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedEpisode: Episode = {
      ...episode,
      title,
      series,
      description,
      seasonNumber,
      episodeNumber,
      releaseDate,
      imdbId,
    };
    onEpisodeUpdated(updatedEpisode);
  };

  const handleDelete = () => {
    const confirmation = window.confirm(
      "Do you wish to delete this episode from the list?"
    );
    if (confirmation) {
      onDelete(episode.id);
    }
  };

  return (
    <form className="form-episode--update" onSubmit={handleSubmit}>
      <h3>Update Episode</h3>
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
          placeholder="Release Date"
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
        <button className="form-button--update" type="submit">
          Update
        </button>
      </div>
      <div>
        <button
          className="form-button--delete"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default UpdateEpisode;
