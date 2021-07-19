import { singleTvShowProp } from "../../Utils/Interfaces";
import { useContext } from "react";
import { showContext } from "../../App";

export default function SingleTvShowStructure({
  show,
}: singleTvShowProp): JSX.Element {
  const setSelectedShow = useContext(showContext);
  return (
    <div>
      <h1 onClick={() => setSelectedShow(show.id.toString())}> {show.name} </h1>
      <p>{show.summary.replace(/<p>|<\/p>/g, "")} </p>
      <img src={show.image.medium} alt={show.name} />
      <li>
        Rated: {show.rating.average}
        Genre: {show.genres}
        status: {show.status}
        Runtime: {show.runtime}
      </li>
    </div>
  );
}
