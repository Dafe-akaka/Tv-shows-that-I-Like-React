import {  SearchBarProps } from "../Utils/Interfaces";


export default function SearchBar({setSearchBar,episodeID}: SearchBarProps): JSX.Element {
    
  
  // let displayCount = `${searchFilter.length} / ${Episodes.length}`
  return (
      <> 
    <p>
    <input
      type="text"
      placeholder="Search..."
      value={episodeID}
      onChange={(event) => { 
        
        setSearchBar(event.target.value)
      }}/>

    {"  "}
     {/* {displayCount} Displaying */}
  
  </p>
</>

  )
}