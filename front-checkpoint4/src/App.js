// import UserList from './components/FetchDatabase/UserList'
import './App.css';
import Navbar from './components/Navbar/Navbar' ;
import React from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import ChampionsView from './components/Champions/ChampionsView'
import Ahri from './components/ChampSelected/Ahri';


function App() {

  return(
    <div>
      <Router>
       
      <Navbar />
      <Switch>
      <Route exact path ="/" component={ChampionsView }/>
    
      <Route path="/Ahri" component={Ahri}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
