// src/components/EpisodeSubscription.tsx
import React from "react";
import { gql, useSubscription } from "@apollo/client";
import { ON_CREATE_EPISODE } from "../graphql/subscriptions";
import "../App.css";

const EpisodeSubscription = () => {
  const { data, loading } = useSubscription(ON_CREATE_EPISODE);

  if (loading) return <p>Waiting for new episodes...</p>;

  return (
    <div>
      {data && <p>Novo episódio criado: {data.onCreateEpisode.title}</p>}
    </div>
  );
};

export default EpisodeSubscription;
