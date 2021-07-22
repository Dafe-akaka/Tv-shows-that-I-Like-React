import { useState, useEffect } from "react";
import SingleEpisode from "./SingleEpisodeStructure";
import { DropDown } from "./DropDown";
import SearchBar from "./SearchBar";
import { SearchFilter } from "../../Utils/SearchFilter";
import { DropDownFilter } from "../../Utils/DropDownFilter";
import { AllEpisodeProp, IEpisode } from "../../Utils/Interfaces";
import { TvShowsDropDown } from "./TvshowsDropDown";

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
      <header>selected episode show : {selectedShow}</header>
      {/* <h1>tvShow: {tvShow}</h1> */}
      <DropDown
        setDropDown={setDropDown}
        episodeID={dropDown}
        episodes={episodesData}
      />
      <SearchBar setSearchBar={setSearch} episodeID={search} />
      <TvShowsDropDown
        // setTvShowsDropDown={setTvShowDropDown}
        tvShowID={selectedShow}
      />

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
