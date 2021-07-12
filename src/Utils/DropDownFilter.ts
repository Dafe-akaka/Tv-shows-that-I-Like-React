import { IEpisode } from "./Interfaces";

interface DropDownFilterProps {
    dropDown: string,
    Episodes: IEpisode[]
    
}

export const  DropDownFilter = ({ dropDown, Episodes}: DropDownFilterProps ): IEpisode[] => {
return Episodes.filter((episode) => episode.id === parseInt(dropDown))
}