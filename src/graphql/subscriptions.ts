// src/graphql/subscriptions.ts
import { gql } from "@apollo/client";

// Subscription para ouvir a criação de novos episódios
export const ON_CREATE_EPISODE = gql`
  subscription OnCreateEpisode {
    onCreateEpisode {
      id
      title
      series
    }
  }
`;
