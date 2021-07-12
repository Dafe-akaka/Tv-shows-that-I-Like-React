export interface IEpisode {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    _links: {
      self: {
        href: string;
      };
    };
  }
  
  export interface DropDownProps {
    episodeID: string;
    setEpisodeId(episodeId: string): void;
  }


  export interface episodeProp {
    episode: IEpisode;
  }


  
  export interface SearchBarProps{ 
    setSearchBar(episodeID: string): void,
    episodeID: string
}
  
  
  export interface singleEpisodeProp {
    ep: IEpisode;
  }
  
  