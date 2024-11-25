import {fetchFromApi} from "@/app/actions/fetchApi";
import {movieById} from "@/app/constants/urls";
import {IMovie} from "@/app/models/IMovie";

export const getMovieById = async (id: number): Promise<IMovie> => {
    const movie = await fetchFromApi<IMovie>(movieById(id));

    return movie
}