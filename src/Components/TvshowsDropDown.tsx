import { TvShowsDropDownProps } from "../Utils/Interfaces"
import tvShows from "../Utils/tvShows.json"
import { useContext } from "react"
import { showContext } from "../App"

export const TvShowsDropDown = ({tvShowID, setTvShowsDropDown}: TvShowsDropDownProps): JSX.Element => {
    const setSelectedShow = useContext(showContext)
    return (
        <> 
        <select
        name="Drop"
        id="Drop"
        value={tvShowID}
        onChange={(e) => {
          setSelectedShow(e.target.value);
        }}
        >
            {tvShows.map((show) => (
                <option value = {show.id} key = {show.id}>
                    {show.name}  
                 </option> 
            ))}
        </select>
        
        </>
    )
}