import { IEpisode } from "./Interfaces";

export function SearchFilter(
  searchTerm: string,
  episodes: IEpisode[]
): IEpisode[] {
  return episodes.filter(
    (episode) =>
      episode.name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) ||
      episode.summary
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
  );
}
