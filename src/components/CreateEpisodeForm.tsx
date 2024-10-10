// src/components/CreateEpisode.tsx
import React, { useState } from "react";

interface Episode {
  id: string;
  title: string;
  series: string;
  seasonNumber: number;
  episodeNumber: number;
  releaseDate: string;
  imdbId: string;
}

interface CreateEpisodeProps {
  addEpisode: (newEpisode: Episode) => void; // Definindo o tipo para o prop 'addEpisode'
}

const CreateEpisode: React.FC<CreateEpisodeProps> = ({ addEpisode }) => {
  const [title, setTitle] = useState("");
  const [series, setSeries] = useState("");
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const [releaseDate, setReleaseDate] = useState("");
  const [imdbId, setImdbId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEpisode: Episode = {
      id: Math.random().toString(36).substring(2), // Gerando um ID aleatório
      title,
      series,
      seasonNumber,
      episodeNumber,
      releaseDate,
      imdbId,
    };

    // Adicionar o novo episódio à lista de episódios
    addEpisode(newEpisode);

    // Limpar o formulário
    setTitle("");
    setSeries("");
    setSeasonNumber(1);
    setEpisodeNumber(1);
    setReleaseDate("");
    setImdbId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Série"
        value={series}
        onChange={(e) => setSeries(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Título do Episódio"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Número da Temporada"
        value={seasonNumber}
        onChange={(e) => setSeasonNumber(Number(e.target.value))}
        required
      />
      <input
        type="number"
        placeholder="Número do Episódio"
        value={episodeNumber}
        onChange={(e) => setEpisodeNumber(Number(e.target.value))}
        required
      />
      <input
        type="date"
        placeholder="Data de Lançamento"
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="IMDb ID"
        value={imdbId}
        onChange={(e) => setImdbId(e.target.value)}
        required
      />
      <button type="submit">Criar Episódio</button>
    </form>
  );
};

export default CreateEpisode;
