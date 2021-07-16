import { singleTvShowProp } from "../../Utils/Interfaces";



export default function SingleTvShowStructure ({show}:singleTvShowProp): JSX.Element {
    return (
        <div>
            <h1> {show.name} </h1>
            <p>{show.summary.replace(/<p>|<\/p>/g, "")} </p>
            <img src= {show.image.medium} alt={show.name} />
            <li> 
                Rated: {show.rating.average} 

                Genre: {show.genres}

                status: {show.status}

                Runtime: {show.runtime}
            </li>

        </div>

    )
} 