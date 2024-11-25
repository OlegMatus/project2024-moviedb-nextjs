'use client'
import React, {useEffect, useState} from 'react';

import {getByQuery} from "@/app/actions/getByQuery";
import {IMovie, MoviesRes} from "@/app/models/IMovie";
import {useSearchParams} from "next/navigation";
import {searchMovie} from "@/app/constants/urls";
import {MovieCard} from "@/app/components/MoviesContainer/MovieCard/MovieCard";

import css from "..//MoviesList/MoviesList.module.css"
import MoviesPagination from "@/app/components/Pagination/MoviesPagination";

const SearchMovie = () => {
    const [movieByQuery, setMovieByQuery] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const searchParams = useSearchParams();

    const query = searchParams.get('query') || '';
    const page = parseInt(searchParams.get('page') || '1', 10);

    useEffect(() => {
        const fetchMovies = async () => {
            if (query) {
                setLoading(true);
                setError(null);
                try {
                    const data: MoviesRes<IMovie> = await getByQuery({
                        searchParams: {path: `${searchMovie}`, query, page},
                    });
                    console.log("API data:", data);
                    setMovieByQuery(data.results || []);
                } catch (e: unknown) {
                    setError(e.message || 'An error occurred while fetching movies.');
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchMovies();
    }, [query, page]);
    console.log(movieByQuery);
    return (
        <div className={css.Main}>
            {loading && <p>Loading...</p>}
            {error && <p style={{color: "red"}}>{error}</p>}
            <div className={css.MoviesListContainer}>
                {movieByQuery.map((movie) => <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>
            <div>
                {<MoviesPagination/>}
            </div>
        </div>
    );
};

export default SearchMovie;