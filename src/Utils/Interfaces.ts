export interface AllEpisodeProp {
  selectedShow: string;
}

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
  episodes: IEpisode[]
  episodeID: string;
  setDropDown(episodeId: string): void;
}

export interface DropDownFilterProps {
  dropDown: string;
  Episodes: IEpisode[];
}


export interface SearchBarProps {
  setSearchBar(episodeID: string): void;
  episodeID: string;
}


export interface TvShowsSearchBarProps {
  setTvShowsSearchBar(tvShowID: string): void
  tvShowID: string
}




export interface singleEpisodeProp {
  ep: IEpisode;
}

export interface singleTvShowProp {
  show: tvShows;
}

export interface TvShowsDataProps {
  tvShowsData: tvShows[];
}

export interface TvShowsDropDownProps {
  // tvShowsData: tvShows[];
  tvShowID: string;
}


export interface tvShows {
  name: string;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  genres: string[];
  status: string;
  runtime: number | null;
  id: number;
  url: string;
  type: string;
  language: string;
  averageRuntime: number | null;
  premiered: string | null;
  officialSite: string | null;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number | null;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
  } | null;
  webChannel: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    } | null;
  } | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number | null;
    imdb: string | null;
  };
}

export interface TVshowDropDownProps {

  tvShowID: string;
  setTvShowDropDown(tvShowID: string): void;
}
