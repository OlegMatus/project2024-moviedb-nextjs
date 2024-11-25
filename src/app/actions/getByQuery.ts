import {fetchFromApi} from "@/app/actions/fetchApi";
import {IMovie, MoviesRes} from "@/app/models/IMovie";

type SearchParams = {
    searchParams: {path: string,query: string, page: number}
}

export const getByQuery = async ({searchParams}: SearchParams): Promise<MoviesRes<IMovie>> => {
    const {path, query, page} = searchParams;
    const endpoint = `${path}`;
    const params = {query, page};

    const data = await fetchFromApi<MoviesRes<IMovie>>(endpoint, params);
    console.log("API response:", data);
    return data;
}