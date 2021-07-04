import { useState } from "react";
import Episodes from "./Episodes.json";
import TvShows from "./TvShows";

function NewEpisodes(): JSX.Element {
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />

      {Episodes.filter((val) => {
        if (input === "") {
          return val;
        } else if (
          val.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
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
