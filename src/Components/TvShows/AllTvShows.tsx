import { useState } from "react";
import { TvShowsDropDown } from "../TvshowsDropDown";
import TvShowsSearchBar from "./TvShowsSearchBar";
import { TvShowsSearchFilter } from "./TvShowsSearchFilter";
import { TvShowsDropDownFilter } from "../../Utils/TvShowsDropDownFilter";
import SingleTvShowStructure from "./SingleTvShowStructure";
import TvShows from "../../Utils/tvShows.json";

const AllTvShows = () => {
  const [showTerm, setShowTerm] = useState("");
  const [showDropDown, setTvShowsDropDown] = useState("");

  let filteredShow = [];

  showDropDown === ""
    ? (filteredShow = TvShowsSearchFilter(showTerm, TvShows))
    : (filteredShow = TvShowsDropDownFilter(showDropDown, TvShows));

  return (
    <div>
      <TvShowsDropDown
        setTvShowsDropDown={setTvShowsDropDown}
        tvShowID={showDropDown}
      />
      <TvShowsSearchBar setTvShowsSearchBar={setShowTerm} tvShowID={showTerm} />

      <div>
        {" "}
        {filteredShow.map((show) => (
          <SingleTvShowStructure key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default AllTvShows;
