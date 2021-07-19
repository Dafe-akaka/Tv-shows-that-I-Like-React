import { tvShows } from "../../Utils/Interfaces";

export const TvShowsSearchFilter = (
  searchTerm: string,
  tvShows: tvShows[]
): tvShows[] => {
  return tvShows.filter(
    (show) =>
      show.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      show.summary.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
};
