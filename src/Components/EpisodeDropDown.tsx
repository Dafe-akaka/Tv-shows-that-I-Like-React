import { EpisodeDropDownProps } from "../Utils/Interfaces"
import tvShows from "../Utils/tvShows.json"

export const EpisodeDropDown = ({episodeID, setEpisodeDropDown}: EpisodeDropDownProps): JSX.Element => {
    return (
        <> 
        <select
        name="Drop"
        id="Drop"
        value={episodeID}
        onChange={(e) => {
          setEpisodeDropDown(e.target.value);
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