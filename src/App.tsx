import React, { useState } from "react";
import { ApolloProvider, useMutation, useQuery } from "@apollo/client";
import client from "./apolloClient";
import CreateEpisode from "./components/CreateEpisode";
import UpdateEpisode from "./components/UpdateEpisode";
import EpisodeList from "./components/EpisodeList";
import SearchEpisode from "./components/SearchSeries";
import OMDBSearchList from "./components/OMDBSearchList";
import { Episode, EpisodeInput } from "./types/Episode";
import {
  CREATE_EPISODE,
  UPDATE_EPISODE,
  DELETE_EPISODE,
} from "./graphql/mutations";
import { LIST_EPISODES } from "./graphql/queries";
import logo from "./img/movie-logo.png";

const App: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [filteredEpisodes, setFilteredEpisodes] = useState<Episode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [creatingEpisode, setCreatingEpisode] = useState(false);
  const [initialValues, setInitialValues] = useState<EpisodeInput | null>(null);

  const [createEpisode] = useMutation(CREATE_EPISODE);
  const [updateEpisodeMutation] = useMutation(UPDATE_EPISODE);
  const [deleteEpisodeMutation] = useMutation(DELETE_EPISODE);

  const { data, refetch } = useQuery(LIST_EPISODES, {
    variables: { search: "" },
  });

  React.useEffect(() => {
    if (data) {
      setEpisodes(data.listEpisodes);
    }
  }, [data]);

  const addEpisode = async (newEpisode: EpisodeInput) => {
    const episodeWithId: Episode = {
      id: Math.random().toString(36).substr(2, 9),
      ...newEpisode,
    };
    await createEpisode({ variables: { episode: episodeWithId } });
    setEpisodes([...episodes, episodeWithId]);
    setCreatingEpisode(false);
  };

  const updateEpisode = async (updatedEpisode: Episode) => {
    await updateEpisodeMutation({ variables: { episode: updatedEpisode } });
    setEpisodes(
      episodes.map((episode) =>
        episode.id === updatedEpisode.id ? updatedEpisode : episode
      )
    );
    setSelectedEpisode(null);
  };

  const deleteEpisode = async (id: string) => {
    const confirmation = window.confirm(
      "Você tem certeza que deseja excluir este episódio?"
    );
    if (confirmation) {
      await deleteEpisodeMutation({ variables: { episodeId: id } });
      setEpisodes(episodes.filter((episode) => episode.id !== id));
      setSelectedEpisode(null);
    }
  };

  const handleSearch = (
    series: string,
    episodeTitle: string,
    imdbId: string
  ) => {
    const filtered = episodes.filter((ep) => {
      const matchSeries = series
        ? ep.series.toLowerCase().includes(series.toLowerCase())
        : true;
      const matchTitle = episodeTitle
        ? ep.title.toLowerCase().includes(episodeTitle.toLowerCase())
        : true;
      const matchImdb = imdbId
        ? ep.imdbId.toLowerCase() === imdbId.toLowerCase()
        : true;

      return matchSeries && matchTitle && matchImdb;
    });

    setFilteredEpisodes(filtered);

    if (filtered.length === 0) {
      const create = window.confirm(
        "Unable to find episode. Do you wish to add it to the list?"
      );
      if (create) {
        setInitialValues({
          title: episodeTitle,
          series: series,
          description: "",
          seasonNumber: 1,
          episodeNumber: 1,
          releaseDate: "",
          imdbId: imdbId,
        });
        setCreatingEpisode(true);
      }
    }
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="flex">
          <img src={logo} />
        </div>
        <div className="flex">
          <SearchEpisode onSearch={handleSearch} />
        </div>
        {creatingEpisode && initialValues && (
          <div className="flex">
            <CreateEpisode
              onEpisodeAdded={addEpisode}
              initialValues={initialValues}
            />
          </div>
        )}

        {filteredEpisodes.length > 0 && (
          <div className="flex">
            <EpisodeList
              episodes={filteredEpisodes}
              onSelect={setSelectedEpisode}
            />
          </div>
        )}

        {filteredEpisodes.length === 0 && !creatingEpisode && (
          <div className="flex">
            <EpisodeList episodes={episodes} onSelect={setSelectedEpisode} />
          </div>
        )}

        {selectedEpisode && (
          <div className="flex">
            <UpdateEpisode
              episode={selectedEpisode}
              onEpisodeUpdated={updateEpisode}
              onDelete={deleteEpisode}
            />
          </div>
        )}
        <div className="flex--column">
          <OMDBSearchList />
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
