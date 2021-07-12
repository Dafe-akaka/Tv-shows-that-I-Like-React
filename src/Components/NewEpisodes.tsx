import { useState } from "react";
import Episodes from "./episodes.json";
import   SingleEpisode  from "./SingleEpisodeStructure";
import { DropDown } from "./DropDown";
import  SearchBar  from "./SearchBar";
import { SearchFilter } from "../Utils/SearchFilter";
import { DropDownFilter } from "../Utils/DropDownFilter";

function NewEpisodes(): JSX.Element {
  const [search,setSearch] = useState("")
  const [dropDown,setDropDown] = useState("")
 console.log(dropDown)

  //if dropdown is blank do :
  let filteredEps = []
  // esle filter on dropdown
  dropDown === "" ? filteredEps = SearchFilter(search,Episodes) : filteredEps = DropDownFilter({dropDown,Episodes})
  
  
  return (
    <>
      <DropDown setEpisodeId= {setDropDown} episodeID= {search} />
      <SearchBar setSearchBar= {setSearch} episodeID= {search}/>

      <div> {filteredEps.map((ep) => (
        
        <SingleEpisode key={ep.id} ep= {ep}/>
        
      ))} 
      
      </div>
    </>
  );
      }

export default NewEpisodes;
