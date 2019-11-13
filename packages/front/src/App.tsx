import React from 'react';
import './css/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PokemonAllCard from './PokemonAllCard';
import PokemonSets from './PokemonSets';
import SingleCardPokemon from './SingleCardPokemon';
import { PageEnum} from './EnumTypes';
import FavouritePokemon from './FavouritePokemon';
import { TeamPokemon } from './css/TeamPokemon';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={PageEnum.TEAM} component={TeamPokemon}/>
          <Route exact path={PageEnum.SETS} component={PokemonSets}/>
          <Route exact path={PageEnum.FAVOURITE} component={FavouritePokemon}/>
          <Route exact path={`${PageEnum.SINGLE_CARD}/:indexPokemon`} component={SingleCardPokemon} />
          <Route exact path={PageEnum.HOME} component={PokemonAllCard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
