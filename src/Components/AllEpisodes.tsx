import { useState, useEffect } from "react";
// import Episodes from "./episodes.json";
import   SingleEpisode  from "./SingleEpisodeStructure";
import { DropDown } from "./DropDown";
import  SearchBar  from "./SearchBar";
import { SearchFilter } from "../Utils/SearchFilter";
import { DropDownFilter } from "../Utils/DropDownFilter";
import { IEpisode } from "../Utils/Interfaces";

function AllEpisodes(): JSX.Element {
  const [search,setSearch] = useState("")
  const [dropDown,setDropDown] = useState("")
  const [episodesData,setEpisodesData] = useState<IEpisode[]>([])

  useEffect(() =>{

    const fetchEpisodesData = async() => {
      const response = await fetch("https://api.tvmaze.com/shows/82/episodes")
      const jsonBody : IEpisode[] = await response.json();
      setEpisodesData(jsonBody)
      console.log(jsonBody)
      
  }
  fetchEpisodesData()
}, []) 


  //if dropdown is blank do :
  let filteredEps = []
  // esle filter on dropdown
  dropDown === "" ? filteredEps = SearchFilter(search,episodesData) : filteredEps = DropDownFilter(dropDown,episodesData)
  

  return (
    <>
      <DropDown setDropDown= {setDropDown} episodeID= {dropDown} />
      <SearchBar setSearchBar= {setSearch} episodeID= {search}/>

      <div> {filteredEps.map((ep) => (
        
        <SingleEpisode key={ep.id} ep= {ep}/>
        
      ))} 
      
      </div>
    </>
  );
      }

export default AllEpisodes;
