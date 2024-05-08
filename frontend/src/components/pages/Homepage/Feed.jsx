import Chit from "./Chit";
import chits from "../../../data/chits.json";
import chitService from "../../../services/chit.service";
import { useEffect, useState } from "react";
import "./Feed.css";

const Feed = () => {
  const [fetchedChits, setFetchedChits] = useState([]);
  useEffect(() => {
    const fetchChits = async () => {
      const chits = await chitService.getchits();
      setFetchedChits(chits.chits);
      
    };

    fetchChits();
  }, []);
  return (
    
    <div className="feed d-flex flex-column justify-content-center align-items-center">
      <h1>Feed</h1>
      {[...fetchedChits].reverse().map((chit, index) => (
        <Chit key ={index} chit={chit} />
      ))}
    </div>
  );
};
export default Feed;
