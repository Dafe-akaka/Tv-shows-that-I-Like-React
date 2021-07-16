import {useState, createContext} from "react";
import AllEpisodes from "./Components/AllEpisodes";
import "./App.css";
import AllTvShows from "./Components/TvShows/AllTvShows";
type showType = (selectedShow: string) => void

export const showContext = createContext<showType>(() => {
  console.log("");
});


function App() {
  const [selectedShow, setSelectedShow] = useState<string>("");
  console.log(selectedShow)
  return (
    <div>
      <showContext.Provider value={setSelectedShow}>
      <header></header>
      {selectedShow === "" ? <AllTvShows/> : <AllEpisodes selectedShow= {selectedShow}/> }
      
      
      </showContext.Provider>
    </div>
  );
}

export default App;
