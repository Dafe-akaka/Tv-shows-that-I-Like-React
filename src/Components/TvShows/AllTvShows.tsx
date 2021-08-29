import { useState } from "react";
import { TvShowsDropDown } from "../Episodes/TvshowsDropDown";
import TvShowsSearchBar from "./TvShowsSearchBar";
import { TvShowsSearchFilter } from "./TvShowsSearchFilter";
import { TvShowsDropDownFilter } from "../../Utils/TvShowsDropDownFilter";
import SingleTvShowStructure from "./SingleTvShowStructure";
import TvShows from "../../Utils/tvShows.json";
import { AllEpisodeProp } from "../../Utils/Interfaces";

const AllTvShows = ({ selectedShow }: AllEpisodeProp) => {
  const [showTerm, setShowTerm] = useState("");

  let filteredShow = [];

  selectedShow === ""
    ? (filteredShow = TvShowsSearchFilter(showTerm, TvShows))
    : (filteredShow = TvShowsDropDownFilter(selectedShow, TvShows));

  return (
    <div>
      <div className="navbar">
        <ul>
          <li>
            <p>
              <TvShowsDropDown tvShowID={selectedShow} />
            </p>
          </li>
          <li>
            <p>
              <TvShowsSearchBar
                setTvShowsSearchBar={setShowTerm}
                tvShowID={showTerm}
              />
            </p>
          </li>
        </ul>
      </div>

      <div className="show-container">
        {" "}
        {filteredShow.map((show) => (
          <SingleTvShowStructure key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default AllTvShows;
