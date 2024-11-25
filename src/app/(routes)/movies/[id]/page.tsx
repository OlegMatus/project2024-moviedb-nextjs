'use server'
import React from 'react';

import {getMovieById} from "@/app/actions/getMovieById";
import MovieInfo from "@/app/components/MoviesContainer/MovieDetails/MovieInfo";
import {getGenres} from "@/app/actions/getGenres";
import {IGenre} from "@/app/models/IGenre";
import {getVideoById} from "@/app/actions/getVideoById";
import {videos} from "@/app/constants/urls";

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

    const {results: dataVideo} = await getVideoById(+id);
    const trailers = [...dataVideo].filter(video => video.name === 'Official Trailer');
    const movieTitle = currentMovie && (currentMovie.title || currentMovie.original_title)

    return (
        <div>
            {currentMovie && trailers.map(trailer => <MovieInfo key={currentMovie.id} currentMovie={currentMovie}
                                                                genres={genresForMovie} trailer={trailer}
                                                                movieTitle={movieTitle}/>)}
        </div>
    );
};

export default MoviesPage;