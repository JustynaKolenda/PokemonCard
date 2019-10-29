export function getCard() {
    return fetch(`https://api.pokemontcg.io/v1/cards`)
    .then(resp => resp.json())
}