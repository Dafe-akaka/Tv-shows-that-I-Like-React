import { SearchBarProps } from "../../Utils/Interfaces";

export default function SearchBar({
  setSearchBar,
  episodeID,
}: SearchBarProps): JSX.Element {
  return (
    <>
      <p>
        <input
          type="text"
          placeholder="Search..."
          value={episodeID}
          onChange={(event) => {
            setSearchBar(event.target.value);
          }}
        />
      </p>
    </>
  );
}
