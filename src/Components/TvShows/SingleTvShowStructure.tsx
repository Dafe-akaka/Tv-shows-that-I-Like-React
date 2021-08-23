import { singleTvShowProp } from "../../Utils/Interfaces";
import { useContext } from "react";
import { showContext } from "../../App";

export default function SingleTvShowStructure({
  show,
}: singleTvShowProp): JSX.Element {
  const setSelectedShow = useContext(showContext);
  return (
    <div className="show">
      <h2 onClick={() => setSelectedShow(show.id.toString())}> {show.name} </h2>

      <img src={show.image.medium} alt={show.name} />
      <div className="show-info">
        <h4> {show.name}</h4>
        <span>
          Rated: {show.rating.average}
          Genre: {show.genres}
          {/* Runtime: {show.runtime} */}
        </span>

        <div className="show-summary">
          <h3>Summary:</h3>
          <p>{show.summary.replace(/<p>|<\/p>/g, "")} </p>
        </div>
      </div>
    </div>
  );
}
