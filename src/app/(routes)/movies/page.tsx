'use server'

import React, {FC} from 'react';
import {MoviesList} from "@/app/components/MoviesContainer/MoviesList/MoviesList";

import {IMovie} from "@/app/models/IMovie";
import {getMovies} from "@/app/actions/getMovies";

type Props = {
    movies: IMovie[];
};

const MoviesPage: FC<Props> = async () => {

    const movies = await getMovies(1);
    return (
        <div>
            {movies && <MoviesList movies={movies}/>}
        </div>
    );
};

export default MoviesPage;