
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