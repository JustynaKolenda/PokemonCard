import * as React from 'react';
import {GetList} from './ModelPokemon';
import {getCard} from './conector';
import { NavLink } from 'react-router-dom';

type PokemonCardS= {
    pokemon: Array<GetList>
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
            console.log(resp)
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
                               {console.log(pokemon.id)}
                               <NavLink to={`cards/${pokemon.id}`}><img className="pokemonCard--cardImg" src={`${pokemon.imageUrl}`} alt=""/></NavLink>
                            </div>
                        })}
                       
                    </div>
                
            </div>
        )
    }
}
export default PokemonAllCard