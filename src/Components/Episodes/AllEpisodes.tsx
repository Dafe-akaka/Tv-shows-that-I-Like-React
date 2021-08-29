import { useState, useEffect } from "react";
import SingleEpisode from "./SingleEpisodeStructure";
import { DropDown } from "./DropDown";
import SearchBar from "./SearchBar";
import { SearchFilter } from "../../Utils/SearchFilter";
import { DropDownFilter } from "../../Utils/DropDownFilter";
import { AllEpisodeProp, IEpisode } from "../../Utils/Interfaces";
import { TvShowsDropDown } from "./TvshowsDropDown";
import "../../App.css";

function AllEpisodes({ selectedShow }: AllEpisodeProp): JSX.Element {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState("");
  const [episodesData, setEpisodesData] = useState<IEpisode[]>([]);

  useEffect(() => {
    const fetchEpisodesData = async () => {
      const response = await fetch(
        `https://api.tvmaze.com/shows/${selectedShow}/episodes`
      );
      const jsonBody: IEpisode[] = await response.json();
      setEpisodesData(jsonBody);
      console.log(jsonBody);
    };
    fetchEpisodesData();
  }, [selectedShow]);

  let filteredEps = [];

  dropDown === ""
    ? (filteredEps = SearchFilter(search, episodesData))
    : (filteredEps = DropDownFilter(dropDown, episodesData));

  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <p>
              Currently showing: {filteredEps.length}/{episodesData.length}{" "}
              episodes
            </p>
          </li>
          <li>
            <p>
              <DropDown
                setDropDown={setDropDown}
                episodeID={dropDown}
                episodes={episodesData}
              />
            </p>
          </li>
          <li>
            <p>
              <SearchBar setSearchBar={setSearch} episodeID={search} />
            </p>
          </li>
          <li>
            <p>
              <TvShowsDropDown tvShowID={selectedShow} />
            </p>
          </li>
        </ul>
      </div>
      <div className="show-container">
        {" "}
        {filteredEps.map((ep) => (
          <SingleEpisode key={ep.id} ep={ep} />
        ))}
      </div>
    </>
  );
}

export default AllEpisodes;
