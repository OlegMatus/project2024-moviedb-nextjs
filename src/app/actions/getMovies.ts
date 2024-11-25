import {fetchFromApi} from "@/app/actions/fetchApi";
import {IMovie, MoviesRes} from "@/app/models/IMovie";

export const getMovies = async (path: string,page: number, query?: string): Promise<MoviesRes<IMovie>> => {

    const params: { page: number; query?: string } = { page };

    if (query) {
        params.query = query;
    }

    if (isNaN(page) || page <= 0) {
        throw new Error("Invalid page number. It should be a positive integer.");
    }

    const data = await fetchFromApi<MoviesRes<IMovie>>(path, params);

    return {
        page: data.page,
        total_pages: data.total_pages,
        total_results: data.total_results,
        results: data.results
    };
}
