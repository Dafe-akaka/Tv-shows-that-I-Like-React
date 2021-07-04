interface IEpisode {
    id: number;
    // url: string;
    name: string;
    season: number;
    number: number;
    // type: string;
    // airdate: string;
    // airtime: string;
    // airstamp: string;
    // runtime: number;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    // _links: { self: { href: string } };
  }

  function TvShows ({id,name,season,number, image, summary,}: IEpisode ): JSX.Element {
      return (
          <div key={id}>
              <h2>{name}</h2>
              <p>{season < 10 ? `S0${season}` : `S${season}`}
              {number < 10 ? `E0${number}` : `E${number}`}
              </p>
              <img src={image.medium} alt={name} />
              <p>{summary.replace(/<p>|<\/p>/g, "")}</p>
              
          </div>

      )
  }

  export default TvShows;

