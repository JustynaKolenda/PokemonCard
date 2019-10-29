
export interface GetList {
    id: string,
    nam: string,
    nationalPokedexNumbe: number,
    imageUr: string,
    imageUrlHiRe: string,
    type: []
}

export interface GetSets {
    code: string,
    expandedLegal: boolean
    logoUrl: string,
    name: string,
    ptcgoCode: string,
    releaseDate: Date,
    series: string,
    standardLegal: false
    symbolUrl: string,
    totalCards: number
    updatedAt: Date
}

export interface GetSinglePokemon {
    id: string,
    name: string,
    nationalPokedexNumber: number,
    imageUrl: string,
    imageUrlHiRes: string,
    types: Array<any>,
    supertype: string,
    subtype: string,
    hp: number,
    retreatCost: Array<any>,
    convertedRetreatCost: number,
    number: number,
    artist: string,
    rarity: string,
    series: string,
    set: string,
    setCode: string,
    attacks: [],
    resistances: Array<any>,
    weaknesses: Array<any>
}