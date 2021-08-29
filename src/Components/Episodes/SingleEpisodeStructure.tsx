import { singleEpisodeProp } from "../../Utils/Interfaces";

export default function SingleEpisode({ ep }: singleEpisodeProp): JSX.Element {
  return (
    <div key={ep.id} className="show">
      <div>
        <h4>{ep.name}</h4>
        <p>
          {ep.season < 10 ? `S0${ep.season}` : `S${ep.season}`}
          {ep.number < 10 ? `E0${ep.number}` : `E${ep.number}`}
        </p>
        {ep.image !== null && <img src={ep.image.medium} alt={ep.name} />}
        <div className="show-summary">
          <h3>Summary:</h3>
          <p>
            {ep.summary
              ? ep.summary.replace(/<p>|<\/p>/g, "").replace(/<b>|<\/b>/g, "")
              : "Sorry episode has no Summary"}
          </p>
        </div>
      </div>
    </div>
  );
}
