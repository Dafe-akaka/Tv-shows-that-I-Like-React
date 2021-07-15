import { useState, useEffect } from "react";
// import Episodes from "./episodes.json";
import   SingleEpisode  from "./SingleEpisodeStructure";
import { DropDown } from "./DropDown";
import  SearchBar  from "./SearchBar";
import { SearchFilter } from "../Utils/SearchFilter";
import { DropDownFilter } from "../Utils/DropDownFilter";
import { IEpisode } from "../Utils/Interfaces";
import { EpisodeDropDown } from "./EpisodeDropDown"

function AllEpisodes(): JSX.Element {
  const [search,setSearch] = useState("")
  const [dropDown,setDropDown] = useState("")
  const [tvShow,setTvShowDropDown]= useState("82")
  const [episodesData,setEpisodesData] = useState<IEpisode[]>([])

  useEffect(() =>{

    const fetchEpisodesData = async() => {
      const response = await fetch(`https://api.tvmaze.com/shows/${tvShow}/episodes`)
      const jsonBody : IEpisode[] = await response.json();
      setEpisodesData(jsonBody)
      console.log(jsonBody)
      
  }
  fetchEpisodesData()
}, [tvShow]) 


  //if dropdown is blank do :
  let filteredEps = []
  // esle filter on dropdown
  dropDown === "" ? filteredEps = SearchFilter(search,episodesData) : filteredEps = DropDownFilter(dropDown,episodesData)
  

  return (
    <>
      <DropDown setDropDown= {setDropDown} episodeID= {dropDown} episodes = {episodesData} />
      <SearchBar setSearchBar= {setSearch} episodeID= {search}/>
      <EpisodeDropDown setEpisodeDropDown = {setTvShowDropDown} episodeID= {tvShow} />
      

      <div> {filteredEps.map((ep) => (
        
        <SingleEpisode key={ep.id} ep= {ep}/>
        
      ))} 
      
      </div>
    </>
  );
      }

export default AllEpisodes;
