import { tvShowDropDownProps } from "../Utils/Interfaces"
import tvShows from "./tvShows.json"

export const TvShowDropDown = ({tvShowID, setTvShowDropDown}: tvShowDropDownProps): JSX.Element => {
    return (
        <> 
        <select
        name="Drop"
        id="Drop"
        value={tvShowID}
        onChange={(e) => {
          setTvShowDropDown(e.target.value);
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