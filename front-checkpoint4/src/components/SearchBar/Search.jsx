import React, {useEffect , useState} from 'react';
import champions from '../ChampionsData/Champions';
import { Link } from 'react-router-dom';
import './Search.css';




function Search() {

const [searchTerm, setSearchTerm] = useState("");
const [searchResults, setSearchResults] = useState([]); 
const [clicked , setClicked] = useState(false);
const myChampions = champions.data
const handleClick = () => {
  setClicked(!clicked);
}
const handleChange = event => {
   
   setSearchTerm(event.target.value);
 };

 const filter = searchResults.slice(0,5) ;

useEffect(() => {
   const results = Object.entries(myChampions).map(([key, value]) =>value.id).filter( champ =>
       champ.toLowerCase().includes(searchTerm) 
            );
      setSearchResults(results);

 }, [searchTerm]);

 return (
<div>
  <h1 className="select-champ">Sélectionnez votre champion pour accéder à sa page dédiée</h1>

   <div className="search-container" >
     <input className="search"
       type="text"
       placeholder="Rechercher un champion"
       value={searchTerm}
       onChange={handleChange}
       onClick={handleClick}
      
       />
       {
        filter.map(item => (
      
      <div className="filter-results">
    <Link className="filter-links" to={"/"+ item }>   
     <p className="filter-items">{item}</p>
    <img src={require('../../Assets/img/champion/loading/'+`${item}`+"_0.jpg").default}/>
    </Link> 
     </div>
    ))
        }

    
     </div>
     </div>
 );
}

export default Search ;