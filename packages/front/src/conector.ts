
export function getCard(pageNumber?:any,pokemonName:string="", pokeType:string="", pokemonSets:string="",pokemonId:string="" ) {
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
    if(pokemonId !== ''){
        query.set('id', pokemonId);
    }
    return fetch(`${process.env.REACT_APP_API}/cards?${query.toString()}`)
    .then(resp => resp.json());
}

export function getSingleCardPokemon(id:string){
   return fetch(`${process.env.REACT_APP_API}/cards/${id}`)
    .then(resp => resp.json())
}

export function getSetsOfPokemon() {
    return fetch(`${process.env.REACT_APP_API}/sets`)
    .then(resp => resp.json())
}

export function getTypes() {
    return fetch(`${process.env.REACT_APP_API}/types`)
    .then(resp => resp.json())
}