
export function getCard(pageNumber?:any,pokemonName:string="", pokeType:string="", pokemonSets:string="" ) {
    const limit = 20;
    const count = limit * pageNumber;
    let query = new URLSearchParams({
        pageSize: `${count}`,
        name: '',
        types: '',
        set: ''
        
    });
    query.set('name', pokemonName);
    query.set('types', pokeType);
    query.set('set', pokemonSets)

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