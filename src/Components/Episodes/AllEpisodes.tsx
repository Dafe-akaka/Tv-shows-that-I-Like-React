import { useState, useEffect } from "react";
import SingleEpisode from "./SingleEpisodeStructure";
import { DropDown } from "./DropDown";
import SearchBar from "./SearchBar";
import { SearchFilter } from "../../Utils/SearchFilter";
import { DropDownFilter } from "../../Utils/DropDownFilter";
import { AllEpisodeProp, IEpisode } from "../../Utils/Interfaces";
import { TvShowsDropDown } from "./TvshowsDropDown";
import "../../App.css" 

function AllEpisodes({ selectedShow }: AllEpisodeProp): JSX.Element {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState("");
  // const [tvShow, setTvShowDropDown] = useState<string>(selectedShow);
  const [episodesData, setEpisodesData] = useState<IEpisode[]>([]);

  useEffect(() => {
    // function showState(show: string): string {
    //   if (tvShow !== selectedShow) {
    //     return show;
    //   } else {
    //     return selectedShow;
    //   }
    // }

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
    <div className= "navbar">
      <ul>
      <li>
        <a href= "n_shows"> 
          Currently showing: {filteredEps.length}/{episodesData.length} episodes
        </a>
        </li>
        <li>
          <a href= "dropdown"> 
        <DropDown
          setDropDown={setDropDown}
          episodeID={dropDown}
          episodes={episodesData}
        />
        </a>
        </li>
        <li> 
          <a href= "search bar" className= "searchbar"> 
        <SearchBar setSearchBar={setSearch} episodeID={search} />
        </a>
        </li>
        <li>
          <a href = "dropdown">
        <TvShowsDropDown
          tvShowID={selectedShow}
        />
        </a>
        </li>
      </ul>
      </div>
      <div>
        {" "}
        {filteredEps.map((ep) => (
          <SingleEpisode key={ep.id} ep={ep} />
        ))}
      </div>
    </>
  );
}

export default AllEpisodes;
