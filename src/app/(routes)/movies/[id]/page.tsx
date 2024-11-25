'use server'
import React from 'react';

import {getMovieById} from "@/app/actions/getMovieById";
import MovieInfo from "@/app/components/MoviesContainer/MovieDetails/MovieInfo";
import {getGenres} from "@/app/actions/getGenres";
import {IGenre} from "@/app/models/IGenre";

type Params = {
    id: string;
}

const MoviesPage = async ({params}: { params: Params }) => {
    const {id} = await params;
    const currentMovie = await getMovieById(+id);

    const allGenres = await getGenres();
    const genresForMovie = currentMovie.genres.map(genreId => allGenres
        .find(genre => genre.id === genreId.id))
        .filter((genre): genre is IGenre => genre !== undefined);

    return (
        <div>
            {currentMovie && <MovieInfo key={currentMovie.id} currentMovie={currentMovie} genres={genresForMovie}/>}
        </div>
    );
};

export default MoviesPage;