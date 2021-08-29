import { tvShows } from "./Interfaces";


export const TvShowsDropDownFilter = (tvShowsdropDown: string, Episodes: tvShows[]): tvShows[] => {
    return Episodes.filter((episode) => episode.name === tvShowsdropDown)
}