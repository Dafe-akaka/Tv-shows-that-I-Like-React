import { singleEpisodeProp } from "../../Utils/Interfaces";

export default function SingleEpisode({ ep }: singleEpisodeProp): JSX.Element {
  return (
    <div key={ep.id}>
      <h2>{ep.name}</h2>
      <p>
        {ep.season < 10 ? `S0${ep.season}` : `S${ep.season}`}
        {ep.number < 10 ? `E0${ep.number}` : `E${ep.number}`}
      </p>
      {ep.image !== null  && <img src={ep.image.medium} alt={ep.name} />}
      
      <p>{ep.summary.replace(/<p>|<\/p>/g, "")}</p>
    </div>
  );
}
