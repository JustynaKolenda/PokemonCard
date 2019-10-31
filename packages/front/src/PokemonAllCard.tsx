import * as React from 'react';
import {ListModel} from './ModelPokemon';
import {getCard} from './conector';
import { NavLink } from 'react-router-dom';

type PokemonCardS= {
    pokemon: Array<ListModel>
}

export class PokemonAllCard extends React.Component<any,PokemonCardS> {
    constructor(props:any){
        super(props);
        this.state= {
            pokemon: []
        }
        this.getAllCards = this.getAllCards.bind(this)
    }

    public getAllCards(){
        getCard().then(resp => {
            this.setState({
                pokemon: resp.cards       
            })
        })
    }

    componentDidMount(){
        this.getAllCards()
    }

    render(){

        return(
            <div>
                
                    <div className="pokemonCard">
                        {this.state.pokemon.map((pokemon:any, key)=> {
                           return <div className="pokemonCard--box" key={pokemon.id}>
                               <NavLink to={`cards/${pokemon.id}`}><img className="pokemonCard--cardImg" src={`${pokemon.imageUrl}`} alt=""/></NavLink>
                            </div>
                        })}
                       
                    </div>
                
            </div>
        )
    }
}
export default PokemonAllCard