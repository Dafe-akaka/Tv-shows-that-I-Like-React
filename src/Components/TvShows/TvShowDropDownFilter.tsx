import { tvShows } from "../../Utils/Interfaces";


export const  DropDownFilter = ( tvShowDropDown: string , tvShows : tvShows[]): tvShows[] => {
return tvShows.filter((show) => show.id === parseInt(tvShowDropDown))
}