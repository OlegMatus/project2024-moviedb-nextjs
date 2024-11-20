import {IGenre} from "@/app/models/IGenre";

export interface IMovie {
    id: number,
    adult: boolean,
    backdrop_path: string,
    genres: IGenre[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    runtime: number,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}