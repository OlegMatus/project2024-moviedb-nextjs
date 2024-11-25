'use client'
import React from 'react';
import {MovieCard} from "@/app/components/MoviesContainer/MovieCard/MovieCard";
import {IMovie} from "@/app/models/IMovie";

import css from "./MoviesList.module.css";
import MoviesPagination from "@/app/components/Pagination/MoviesPagination";
import StarsRating from "@/app/components/Rating/StarsRating";

type Props = {
    movies: IMovie[];
}

const MoviesList = ({movies}: Props) => {
    return (
        <div className={css.Main}>
            <div className={css.MoviesListContainer}>
                {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesList};