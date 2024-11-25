import {fetchFromApi} from "@/app/actions/fetchApi";
import {IVideos} from "@/app/models/IVideo";
import {videos} from "@/app/constants/urls";

export const getVideoById = async ( id: number): Promise<IVideos> => {
    const data = await fetchFromApi<IVideos>(videos(id));

    return data
}