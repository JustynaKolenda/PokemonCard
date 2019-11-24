
export type ListModel = {
    id: string,
    name: string,
    imageUrl: string,
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
    resistances: Array<ResistancesItem>,
    weaknesses: Array<WeaknessesItem>,
    text: string
}

type ResistancesItem = {
    value: number,
    type: string
}

type WeaknessesItem = {
    value: number,
    type: string
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

export interface ModelType {
    name: string
}

export class PokemonModel {
    id = "";
    name = '';
    nationalPokedexNumber = 0;
    imageUrl = '';
    imageUrlHiRes = '';
    types = [];
    supertype = '';
    subtype = '';
    hp = 0;
    retreatCost = [];
    convertedRetreatCost = 0;
    number = 0;
    artist = '';
    rarity = '';
    series = '';
    set = '';
    setCode = '';
    attacks = [];
    resistances = [];
    weaknesses = [];
    text = ''
}