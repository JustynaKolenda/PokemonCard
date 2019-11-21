
export type ListModel = {
    id: string,
    name: string,
    imageUr: string,
    imageUrlHiRe: string,
    type: Array<string>,
    count: number
}


export type SetsModel = {
    code: string,
    expandedLegal: boolean
    logoUrl: string,
    name: string,
    ptcgoCode: string,
    releaseDate: Date,
    series: string,
    standardLegal: boolean,
    symbolUrl: string,
    totalCards: number,
    updatedAt: Date,
}

export type SingleCardModel = {
    id: string,
    name: string,
    nationalPokedexNumber: number,
    imageUrl: string,
    imageUrlHiRes: string,
    types: Array<string>,
    supertype: string,
    subtype: string,
    hp: number,
    retreatCost: Array<string>,
    convertedRetreatCost: number,
    number: number,
    artist: string,
    rarity: string,
    series: string,
    set: string,
    setCode: string,
    attacks: Array<string>,
    resistances: Array<string>,
    weaknesses: Array<string>,
    text: string
}

export interface Cart {
    name: string,
    id: string,
    imageUrl: string,
}

export interface ModelFilter { 
    name: string,
    type: Array<string>,
}