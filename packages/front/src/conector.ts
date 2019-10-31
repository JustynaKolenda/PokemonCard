require('dotenv').config();

export function getCard() {
    return fetch(`${process.env.REACT_APP_API}/cards`)
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