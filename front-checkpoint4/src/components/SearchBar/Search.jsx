







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