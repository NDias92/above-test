import React, { useState } from "react";
import axios from "axios";
import "./styles/OMDBSearchList.scss";

interface MovieDetails {
  Title: string;
  Year: string;
  Plot: string;
  Poster: string;
  imdbID: string;
  Genre: string;
  Director: string;
}

const OMDBSearchList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [year, setYear] = useState("");
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setMovieDetails(null);

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${searchTerm}&y=${year}&plot=full&apikey=a20bf500`
      );

      if (response.data.Response === "True") {
        setMovieDetails(response.data);
      } else {
        setError("No result was found");
      }
    } catch (err) {
      setError("Error - No data on OMDb API.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="form-episode--omdb">
        <h3>OMDB Find Movie</h3>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Find by Title"
            className="search-bar"
          />
        </div>
        <div>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year of release"
            className="search-bar"
          />
        </div>
        <div className="flex">
          <button onClick={handleSearch}>Find</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      {movieDetails && (
        <div className="movie-details">
          <h2>
            {movieDetails.Title} ({movieDetails.Year})
          </h2>
          <table>
            <tr>
              <td rowSpan={3}>
                <img
                  src={
                    movieDetails.Poster !== "N/A"
                      ? movieDetails.Poster
                      : "placeholder.jpg"
                  }
                  alt={movieDetails.Title}
                  style={{ width: "150px" }}
                />
              </td>
              <td className="movie-details--title">Genre:</td>
              <td>{movieDetails.Genre} </td>
            </tr>
            <tr>
              <td className="movie-details--title">Diretor:</td>
              <td>{movieDetails.Director}</td>
            </tr>
            <tr>
              <td className="movie-details--title">Plot:</td>
              <td className="movie-details--plot">{movieDetails.Plot}</td>
            </tr>
          </table>
        </div>
      )}
    </>
  );
};

export default OMDBSearchList;
