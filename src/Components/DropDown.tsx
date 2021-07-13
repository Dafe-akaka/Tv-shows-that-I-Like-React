
import { DropDownProps } from "../Utils/Interfaces";
import Episodes from "./episodes.json";


export const DropDown = ({
  episodeID,
  setDropDown,
}: DropDownProps): JSX.Element => {
  const handleDropDownReset = () => {
    setDropDown("");
  };

  
  return (
    <>
      <select
        name="Drop"
        id="Drop"
        value={episodeID}
        onChange={(e) => {
          setDropDown(e.target.value);
        }}
      >
        {Episodes.map((episode) => (
          <option value={episode.id} key={episode.id}>
            {episode.season < 10 ? `S0${episode.season}` : `S${episode.season}`}
            {episode.number < 10 ? `E0${episode.number}` : `E${episode.number}`}
            {" - "}
            {episode.name}
          </option>
        ))}
      </select>
      <button onClick={handleDropDownReset}>Reset Search</button>
    </>
  );
};
