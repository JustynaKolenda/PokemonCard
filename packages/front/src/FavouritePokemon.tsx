 import * as React from 'react';
import {ListModel} from './ModelPokemon'

type ICardProps = {
    pokemonItemcart: any
}

export class FavouritePokemon extends React.Component <ICardProps,any> {
  
    render(){
    const {pokemonItemcart} = this.props
    return (
            <div className="alert alert-info" onChange={pokemonItemcart}>
                {pokemonItemcart.length===0? "Ther are no Cards" : <div> You have {pokemonItemcart.length} Cards </div>}
            </div>
        )
    }
}
    export default FavouritePokemon