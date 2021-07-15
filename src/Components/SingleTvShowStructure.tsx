import { singleTvShowProp } from "../Utils/Interfaces";



export default function SingleTvShow({show}:singleTvShowProp): JSX.Element {
    return (
        <div>
            <h1> {show.name} </h1>
            <p>{show.summary} </p>
            <img src= {show.image.medium} alt={show.name} />
            <li> 
                Rated: {show.rating}

                Genre: {show.genres}

                status: {show.status}

                Runtime: {show.runtime}
            </li>

        </div>

    )
} 