

interface IDirector {
    credit_id: number,
    name:string
}



export interface IMovie {
    movieId?: number,
    backdrop_path?: string,
    poster_path?: string,
    title?:string,
    overview?:string,
    actors: string,
    vote_average: number,
    directors: IDirector[]

} 

