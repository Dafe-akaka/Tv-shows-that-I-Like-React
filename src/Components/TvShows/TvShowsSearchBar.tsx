import { TvShowsSearchBarProps } from "../../Utils/Interfaces";

export default function TvShowsSearchBar({
  setTvShowsSearchBar,
  tvShowID,
}: TvShowsSearchBarProps): JSX.Element {
  return (
    <>
      <p>
        <input
          type="text"
          placeholder="Search Tvshow"
          value={tvShowID}
          onChange={(event) => {
            setTvShowsSearchBar(event.target.value);
          }}
        />
      </p>
    </>
  );
}
