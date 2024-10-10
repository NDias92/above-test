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
  episodes: Episode[]; // Receber a lista de episódios existentes como prop
  addEpisode: (newEpisode: Episode) => void; // Função para adicionar novo episódio
}

const CreateEpisode: React.FC<CreateEpisodeProps> = ({
  episodes,
  addEpisode,
}) => {
  const [title, setTitle] = useState("");
  const [series, setSeries] = useState("");
  const [seasonNumber, setSeasonNumber] = useState(1);
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const [releaseDate, setReleaseDate] = useState("");
  const [imdbId, setImdbId] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para armazenar a mensagem de erro

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se já existe um episódio com o mesmo título, temporada, episódio ou IMDb ID
    const episodeExists = episodes.some(
      (episode) =>
        episode.title.toLowerCase() === title.toLowerCase() &&
        episode.seasonNumber === seasonNumber &&
        episode.episodeNumber === episodeNumber
    );

    const imdbExists = episodes.some((episode) => episode.imdbId === imdbId);

    if (episodeExists) {
      setErrorMessage(
        "Erro: Já existe um episódio com o mesmo título, temporada e número de episódio."
      );
      return;
    }

    if (imdbExists) {
      setErrorMessage("Erro: O IMDb ID já foi adicionado.");
      return;
    }

    // Se não houver erros, adicionar o novo episódio
    const newEpisode: Episode = {
      id: Math.random().toString(36).substring(2), // Gerando um ID aleatório
      title,
      series,
      seasonNumber,
      episodeNumber,
      releaseDate,
      imdbId,
    };

    addEpisode(newEpisode);

    // Limpar o formulário e mensagem de erro
    setTitle("");
    setSeries("");
    setSeasonNumber(1);
    setEpisodeNumber(1);
    setReleaseDate("");
    setImdbId("");
    setErrorMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
        {/* Exibir mensagem de erro */}
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
    </div>
  );
};

export default CreateEpisode;
