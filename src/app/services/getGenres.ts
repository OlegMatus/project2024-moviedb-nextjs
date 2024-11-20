import {fetchFromApi} from "@/app/services/fetchApi";
import {IGenre} from "@/app/models/IGenre";
import {genres} from "@/app/constants/urls";

export const getGenres = () => fetchFromApi<IGenre[]>(genres);