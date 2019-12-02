
export function getCard(page:number,filter:URLSearchParams= new URLSearchParams()) {
    filter.set("page", String(page));
    return fetch(`${process.env.REACT_APP_API}/cards?${filter.toString()}`)
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