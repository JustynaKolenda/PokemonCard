import React from 'react';
import './css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PokemonAllCard from './PokemonAllCard';
import PokemonSets from './PokemonSets';
import SingleCardPokemon from './SingleCardPokemon';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/sets" component={PokemonSets}/>
        <Route exact path="/cards/:indexPokemon" component={SingleCardPokemon} />
        <Route exact path="/" component={PokemonAllCard}/>
      </Router>
    </div>
  );
}

export default App;
