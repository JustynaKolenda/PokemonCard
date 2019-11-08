
export function getCard(pageNumber?:any,pokemonName:string="", pokeType:string="", pokemonSets:string="" ) {
    let query = new URLSearchParams();
    query.set('page', pageNumber);
    if(pokemonName !== ''){
        query.set('name', pokemonName);
    }
    if(pokeType !== ''){
        query.set('types', pokeType);
    }
    if(pokemonSets !== ''){
        query.set('set', pokemonSets);
    }
    return fetch(`${process.env.REACT_APP_API}/cards?${query.toString()}`)
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