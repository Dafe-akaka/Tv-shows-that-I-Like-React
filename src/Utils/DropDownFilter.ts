import { IEpisode } from "./Interfaces";


export const  DropDownFilter = ( dropDown: string , Episodes: IEpisode[]): IEpisode[] => {
return Episodes.filter((episode) => episode.id === parseInt(dropDown))
}