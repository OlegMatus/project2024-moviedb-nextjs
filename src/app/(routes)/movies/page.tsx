'use server'

import React from 'react';
import {MoviesList} from "@/app/components/MoviesContainer/MoviesList/MoviesList";

import {getMovies} from "@/app/actions/getMovies";
import {movies} from "@/app/constants/urls";

type SearchParams = {
searchParams: { page?: string };
}

const MoviesPage = async ({ searchParams }: SearchParams ) => {
    const {page} = await searchParams;
    const pageParam = page ? parseInt(page, 10) : 1;

    if (isNaN(pageParam) || pageParam <= 0) {
        console.error("Invalid page number provided:", page);
        throw new Error("Invalid page number. It should be a positive integer.");
    }

    const {results: moviesData} = await getMovies(movies, pageParam);

    return (
        <div>
            {moviesData && <MoviesList movies={moviesData}/>}
        </div>
    );
};

export default MoviesPage;