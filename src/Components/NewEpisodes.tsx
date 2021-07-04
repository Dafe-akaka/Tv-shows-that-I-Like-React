import { useState } from "react";
import Episodes from "./Episodes.json";
import TvShows from "./TvShows";

function NewEpisodes(): JSX.Element {
  const [searchTerm, setSearchTem] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTem(event.target.value);
        }}
      />

      {Episodes.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((episode) => (
        <TvShows
          key={episode.id}
          id={episode.id}
          name={episode.name}
          season={episode.season}
          number={episode.number}
          image={episode.image}
          summary={episode.summary}
        />
      ))}
    </>
  );
}

export default NewEpisodes;
