// src/graphql/mutations.ts
import { gql } from "@apollo/client";

// Mutation para criar um novo episódio
export const CREATE_EPISODE = gql`
  mutation CreateEpisode($episode: EpisodeInput!) {
    createEpisode(episode: $episode) {
      id
      title
      series
    }
  }
`;
