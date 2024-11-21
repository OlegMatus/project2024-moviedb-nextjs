import {fetchFromApi} from "@/app/actions/fetchApi";
import {IMovie} from "@/app/models/IMovie";
import {movies} from "@/app/constants/urls";

export const getMovies = async (page: number): Promise<IMovie[]> => {
    const data = await fetchFromApi<{ results: IMovie[] }>(movies, {page: page.toString()});

    return data.results;
}
