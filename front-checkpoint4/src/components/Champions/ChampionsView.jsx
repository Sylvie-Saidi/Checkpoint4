import React, { useState, useEffect } from "react";
import champions from "../ChampionsData/Champions";
import './ChampionsView.css';
import { Link } from 'react-router-dom';



function ChampionsView() {
  const [selectedChamp, setSelectedChamp] = useState("");
  const [myChampions, setMyChampions] = useState({});
  const [clicked , setClicked ] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
  

  useEffect(() => 
  { 
    setMyChampions(champions.data);
  },[]);
 
 
  
  const renderObject = Object.entries(myChampions).map(([key, value]) => {
    return (
      <div className="app-container">
        {/* <Router> */}
        <div
          onClick={function handleSelect() {
            setSelectedChamp(key);
           }} >
          <div className="champion-container" key={key}>
            <Link to={"/"+key}>
              <p className="champion-name">{value.name}</p>
              <img
                src={require('../../Assets/img/champion/loading/'+`${key}`+"_0.jpg").default}/>
            </Link>
          </div>
        </div>
         
        {/* </Router> */}
        </div>
    );
  });

 
  return(
          <div className="champion-container">
                 {renderObject}
          </div>
          
);
}
export default ChampionsView;
