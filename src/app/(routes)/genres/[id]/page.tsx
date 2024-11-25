'use server'
import React from "react";

import {getMoviesByGenreId} from "@/app/actions/getMoviesByGenreId";
import {MovieCard} from "@/app/components/MoviesContainer/MovieCard/MovieCard";
import {movies} from "@/app/constants/urls";

import css from "@/app/components/MoviesContainer/MoviesList/MoviesList.module.css";

type Params = {
    id: string;
}
type SearchParams = {
    page: string
}
const MoviesByGenresPage = async ({params, searchParams}: { params: Params, searchParams: SearchParams }) => {
        const {id} = await params;
        const {page} = await searchParams;

        const currentPage = page ? parseInt(page) : 1;

        const {results: moviesByGenres} = await getMoviesByGenreId(movies, id, currentPage);
        return (
            <div className={css.Main}>
                <div className={css.MoviesListContainer}>
                    {moviesByGenres && moviesByGenres.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
        );
    }
;

export default MoviesByGenresPage;