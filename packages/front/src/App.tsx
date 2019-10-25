import React from 'react';
import './css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PokemonAllCard from './PokemonAllCard';
import PokemonSets from './PokemonSets';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={PokemonAllCard}/>
        <Route exact path="/sets" component={PokemonSets}/>
      </Router>
    </div>
  );
}

export default App;
