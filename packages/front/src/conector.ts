require('dotenv').config();

export function getCard(pokemonName?:string) {
    // const type = typePok;
    const name = pokemonName;
    // const limit = 20;
    // const count = limit * pageNumber;

    return fetch(`${process.env.REACT_APP_API}/cards?name=${name}`)
    .then(resp => resp.json())
}

export function getSingleCardPokemon(id:string){
   return fetch(`${process.env.REACT_APP_API}/cards/${id}`)
    .then(resp => resp.json())
}

export function grtSetsOfPokemon() {
    return fetch(`${process.env.REACT_APP_API}/sets`)
    .then(resp => resp.json())
}