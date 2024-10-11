import React, { useEffect, useState } from "react";
import axios from "axios";

interface EpisodeDetails {
  Title: string;
  Year: string;
  Plot: string;
  Poster: string;
}

const OMDBEpisodeDetails = ({ imdbId }: { imdbId: string }) => {
  const [episodeDetails, setEpisodeDetails] = useState<EpisodeDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${imdbId}&apikey=a20bf500`
        );
        setEpisodeDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error - couldn't find episode details");
        setLoading(false);
      }
    };

    fetchEpisodeDetails();
  }, [imdbId]);

  if (loading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="episode-details">
      {episodeDetails && (
        <div>
          <h2>
            {episodeDetails.Title} ({episodeDetails.Year})
          </h2>
          <img
            src={episodeDetails.Poster}
            alt={episodeDetails.Title}
            style={{ width: "150px" }}
          />
          <p>{episodeDetails.Plot}</p>
        </div>
      )}
    </div>
  );
};

export default OMDBEpisodeDetails;
