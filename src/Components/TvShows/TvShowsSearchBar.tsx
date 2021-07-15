import { TvShowsSearchBar } from "../../Utils/Interfaces";



export default function TvShowsSearchBar({setTvShowsSearchBar,tvShowID}:TvShowsSearchBar): JSX.Element {

    return (
        <>
        <p>
            <input
            type = "text"
            placeholder = "Search Tvshow"
            value = {tvShowID}
            onChange = {(event)=> {
                setTvShowsSearchBar(event.target.value)
            }
            }
            />
        </p>

        </>
    )
}