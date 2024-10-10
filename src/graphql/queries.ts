// src/graphql/queries.ts
import { gql } from "@apollo/client";

// Query para listar episódios
export const LIST_EPISODES = gql`
  query ListEpisodes($search: String) {
    listEpisodes(search: $search) {
      id
      series
      title
      seasonNumber
      episodeNumber
    }
  }
`;

// Query para obter detalhes de um episódio
export const GET_EPISODE_BY_ID = gql`
  query GetEpisodeById($episodeId: String!) {
    getEpisodeById(episodeId: $episodeId) {
      id
      series
      title
      seasonNumber
      episodeNumber
      description
      releaseDate
      imdbId
    }
  }
`;
