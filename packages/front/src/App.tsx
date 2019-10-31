import React from 'react';
import './css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PokemonAllCard from './PokemonAllCard';
import PokemonSets from './PokemonSets';
import SingleCardPokemon from './SingleCardPokemon';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/sets" component={PokemonSets}/>
          <Route exact path="/cards/:indexPokemon" component={SingleCardPokemon} />
          <Route exact path="/" component={PokemonAllCard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
