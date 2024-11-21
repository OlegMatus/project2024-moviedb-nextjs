import {fetchFromApi} from "@/app/actions/fetchApi";
import {IGenre} from "@/app/models/IGenre";
import {genres} from "@/app/constants/urls";

export const getGenres = async (): Promise<IGenre[]> => {
    const data = await fetchFromApi<{ genres: IGenre[] }>(genres);

    return data.genres;
};