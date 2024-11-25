import {fetchFromApi} from "@/app/actions/fetchApi";
import {IMovie, MoviesRes} from "@/app/models/IMovie";

export const getMoviesByGenreId = async (path: string,genreId: string, page: number): Promise<MoviesRes<IMovie>> => {
    const data = await fetchFromApi<MoviesRes<IMovie>>(path, {with_genres: genreId, page});

    return {
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results,
        results: data.results
    };
};