import { IEpisode } from "./Interfaces";


export const  TvShowsDropDownFilter = ( tvShowsdropDown: string , Episodes: IEpisode[]): IEpisode[] => {
return Episodes.filter((episode) => episode.name === tvShowsdropDown)
}