import axios from "axios";
import { useState, useEffect } from "react";

function useOMDB(imdbId: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?i=${imdbId}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [imdbId]);

  return { data, loading };
}

function EpisodeDetails({ imdbId }: { imdbId: string }) {
  const { data, loading } = useOMDB(imdbId);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data found.</p>;

  return (
    <div>
      <h2>{data.Title}</h2>
      <img src={data.Poster} alt={data.Title} />
      <p>{data.Plot}</p>
    </div>
  );
}
