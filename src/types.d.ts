export interface Personaje  {
    image:string,
    nombre:string, 
    especie:string,
    episode: string[]
}

export type Personajes = Personaje[]

export interface APIresponse {
    results: Personaje[]
}