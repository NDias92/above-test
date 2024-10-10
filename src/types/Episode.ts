// src/types/Episode.ts
export interface Episode {
  id: string;
  series: string;
  title: string;
  seasonNumber: number;
  episodeNumber: number;
  description: string;
  releaseDate: string;
  imdbId: string;
}
