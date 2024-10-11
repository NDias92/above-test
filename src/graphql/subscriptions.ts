import { gql } from "@apollo/client";

export const ON_CREATE_EPISODE = gql`
  subscription OnCreateEpisode {
    onCreateEpisode {
      id
      title
      series
    }
  }
`;
