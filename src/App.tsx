import { useState, createContext } from "react";
import AllEpisodes from "./Components/Episodes/AllEpisodes";
import "./App.css";
import AllTvShows from "./Components/TvShows/AllTvShows";

type showType = (selectedShow: string) => void;

export const showContext = createContext<showType>(() => {
  console.log("");
});

function App() {
  const [selectedShow, setSelectedShow] = useState<string>("");


  return (
    <div>
      <showContext.Provider value={setSelectedShow}>
    
        {selectedShow === "" ? (
          <AllTvShows selectedShow={selectedShow}/>
        ) : (
          <AllEpisodes selectedShow={selectedShow} />
        )}
      </showContext.Provider>
    </div>
  );
}

export default App;
