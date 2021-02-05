import UserList from './components/UserList'
import './App.css';
import Navbar from './components/Navbar/Navbar' ;
import React , {useEffect , useState} from 'react';
import { BrowserRouter as Router , Link , Route , Switch} from 'react-router-dom';




function App() {

var xmlHttp = new XMLHttpRequest();
 xmlHttp.open( "GET",'http://ddragon.leagueoflegends.com/cdn/11.3.1/data/fr_FR/champion.json'
 , false ); // false for synchronous request
 xmlHttp.send( null );
 const json = JSON.parse(xmlHttp.responseText);
 const myChampions = json.data;
 const [selectedChamp , setSelectedChamp] = useState("");
 const [clicked , setClicked ] = useState(false);
 const handleClick = () => {
   setClicked(!clicked);
 }

  const renderObject = (
     Object.entries(myChampions).map(([key , value])=> {
 
      return ( 
     
        <div onClick={handleClick} className={clicked ? 'champs-none' : 'champs-view'}>
          <div  onClick={function handleSelect() {
              setSelectedChamp(key)
          } }>
            <ul className="champion-container" key={key} >
             <Link to={key}> <li className="champion-name">{value.name}</li>
              <img  src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+`${key}`+"_0.jpg"}/>
              </Link>
            </ul>
            </div>
            </div>
           
      ) }) );
 
      const xmlHttpSelected = new XMLHttpRequest();
      xmlHttpSelected.open( "GET","http://ddragon.leagueoflegends.com/cdn/11.3.1/data/fr_FR/champion/"+`${selectedChamp}`+".json"
      , false); // false for synchronous request
      xmlHttpSelected.send( null );
      const json2 = JSON.parse(xmlHttpSelected.responseText);

      const mySelectedChampions = json2.data;

    const renderSelected   = (
  
      <div onClick={handleClick} className={clicked ? 'selected-popup' : 'selected-popup-none'}>
      
          <ul  className="champion-container-selected" key={selectedChamp}>
            <li className="champion-name-selected">{selectedChamp}</li>
            <img  src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+`${selectedChamp}`+"_0.jpg"}/>
            </ul>
             {Object.entries(mySelectedChampions).map(([key  , value])=> { 
               return (
                <div className="champion-infos">
            <p className="partype">{key == selectedChamp ? value.partype : null}</p>
            <p className="champion-tags">{key == selectedChamp? value.tags : null}</p>
            <p className="champion-text">{key == selectedChamp ? value.lore : null}</p> 
            <p className="champion-allytips">{key == selectedChamp ? value.allytips : null }</p>
            <p className="champion-enemytips">{key== selectedChamp ? value.enemytips : null}</p>
            <div className="champion-spells">
            <p className="champion-passive-title"> {key ==selectedChamp ? value.passive['name'] : null }</p>
            <p className="champion-passive-description"> {key == selectedChamp ? value.passive['description'] : null}</p>
            <p className="champion-spell-name-1">{key==selectedChamp ? value.spells[0]['name'] : null}</p>
            <p className="champion-spell-description-1">{key==selectedChamp ? value.spells[0]['description'] : null}</p>
            <p className="champion-spell-name-1">{key==selectedChamp ? value.spells[1]['name'] : null}</p>
            <p className="champion-spell-description-1">{key==selectedChamp ? value.spells[1]['description'] : null}</p>
            <p className="champion-spell-name-1">{key==selectedChamp ? value.spells[2]['name'] : null}</p>
            <p className="champion-spell-description-1">{key==selectedChamp ? value.spells[2]['description'] : null}</p>
            <p className="champion-spell-name-1">{key==selectedChamp ? value.spells[3]['name'] : null}</p>
            <p className="champion-spell-description-1">{key==selectedChamp ? value.spells[3]['description'] : null}</p>
          </div>
          </div>
           
             ) }) } 
     
             </div>);

const [searchChamp , setSearchChamp ] =useState("");
const [searchResults , setSearchResults] = useState([]);
 
const handleChange = event => {
    setSearchChamp(event.target.value);
}
useEffect(()=> {
    const results = Object.entries(myChampions).map(([key , value])=> value.name).filter( champ =>
    champ.toLowerCase().includes(searchChamp) 
         );
    setSearchResults(results);
  
}, [searchChamp]);
const searchClick = () => {
  <div  onClick={function handleSelect() {
    setSelectedChamp(searchChamp)
} }>
  <ul className="champion-container" key={searchChamp} >
   <Link to={searchChamp}> <li className="champion-name">{searchChamp}</li>
    {/* <p className="champion-text">{value.blurb}</p> */}
    <img  src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+`${searchChamp}`+"_0.jpg"}/>
    </Link>
  </ul>
  </div>
}

  return(
    <div>
      <Router>
     
       <Navbar />
         <div className= "search-container">
            <form onClick= {handleClick}>
              <input  className="search" type="text" placeholder="Rechercher un champion" value={searchChamp} onChange={handleChange}/>
            </form>
               <ul className="">
                {searchResults.slice(0,8).map(item  =>(
                 <Link to={searchChamp}><li  className={clicked ? 'search-list-view' : 'search-list-none'}> {item} </li></Link> 
                ))
                }
            </ul>
        </div>
          <div className="app-container">
         {renderObject}
         </div>
         <div>
        <Switch>
        <Route to={selectedChamp}>   
         {renderSelected} 
       </Route>
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
