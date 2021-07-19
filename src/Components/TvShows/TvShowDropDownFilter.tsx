import { tvShows } from "../../Utils/Interfaces";

export const TvDropDownFilter = (
  tvShowDropDown: string,
  tvShows: tvShows[]
): tvShows[] => {
  return tvShows.filter((show) => show.id === parseInt(tvShowDropDown));
};
