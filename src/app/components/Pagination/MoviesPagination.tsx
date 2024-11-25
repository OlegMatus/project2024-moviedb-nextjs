'use client'
import React, {ChangeEvent, useEffect, useState} from 'react';

import {CircularProgress, Pagination, Stack, Typography} from "@mui/material";
import {useRouter, useSearchParams} from "next/navigation";
import {getMovies} from "@/app/actions/getMovies";
import {movies} from "@/app/constants/urls";

import css from "./MoviePagination.module.css";

const MoviesPagination = () => {

    const [totalPages, setTotalPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [noMovies, setNoMovies] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')!, 10) : 1;
    const query = searchParams.get('query') || '';

    const handlePageChange = async (event: ChangeEvent<unknown>, newPage: number) => {
        event.preventDefault();

        if (newPage !== currentPage) {
            router.push(`/movies?page=${newPage}`)
        }
    }

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            setNoMovies(false);

            try {
                const {results, total_pages} = await getMovies(movies, +currentPage, query);
                console.log('API Response:', { results, total_pages });
                setTotalPages(total_pages)

                if (results.length === 0) {
                    setNoMovies(true);
                }
            } catch (e) {
                console.error('Error fetching movies:', e);
                setNoMovies(true);
            } finally {
                setIsLoading(false);
            }
        }
        if (query || currentPage > 0 ) {
            void fetchMovies();
        } else {
            setNoMovies(false);
        }
    }, [currentPage, query]);

    return (
        <div className={css.Pagination}>
            {noMovies ? (
                <Typography variant="h6" color="error">
                    No movies found for your search.
                </Typography>
            ) : (
                <Stack spacing={2}>
                    {isLoading ? (
                        <CircularProgress/>
                    ) : (
                        totalPages > 1 && (
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                showFirstButton
                                showLastButton
                                onChange={handlePageChange}
                                color="primary"
                                disabled={isLoading}
                            />
                        )
                    )}
                </Stack>
            )}
        </div>
    );
};

export default MoviesPagination;