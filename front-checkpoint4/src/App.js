// import UserList from './components/FetchDatabase/UserList'
import './App.css';
import Navbar from './components/Navbar/Navbar' ;
import React from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import ChampionsView from './components/Champions/ChampionsView'
import Ahri from './components/ChampSelected/Ahri';
import Aatrox from './components/ChampSelected/Aatrox';
import Akali from './components/ChampSelected/Akali';
import Alistar from './components/ChampSelected/Alistar';
import Amumu from './components/ChampSelected/Amumu';
import Anivia from './components/ChampSelected/Anivia';

function App() {

  return(
    <div>
      <Router>
       
      <Navbar />
      <Switch>
      <Route exact path ="/" component={ChampionsView } />
      <Route path="/Aatrox" component={Aatrox} />
      <Route path="/Ahri" component={Ahri} />
      <Route path="/Akali" component={Akali} />
      <Route path="/Alistar" component={Alistar} />
      <Route path="/Amumu" component={Amumu} />
      <Route path="/Anivia" component={Anivia} />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
