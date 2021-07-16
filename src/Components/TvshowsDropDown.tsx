import { TvShowsDropDownProps } from "../Utils/Interfaces"
import tvShows from "../Utils/tvShows.json"

export const TvShowsDropDown = ({tvShowID, setTvShowsDropDown}: TvShowsDropDownProps): JSX.Element => {
    return (
        <> 
        <select
        name="Drop"
        id="Drop"
        value={tvShowID}
        onChange={(e) => {
          setTvShowsDropDown(e.target.value);
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