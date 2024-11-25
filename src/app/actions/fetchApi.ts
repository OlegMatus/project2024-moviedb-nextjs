import {baseURLS} from "@/app/constants/urls";

type Params = Record<string, string | number>
export const fetchFromApi = async <T>(endpoint: string, params: Params = {}): Promise<T> => {
    const url = new URL(`${baseURLS}/${endpoint}`);
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, String(value)));
    const apiToken: string | undefined = process.env.NEXT_PUBLIC_APP_TOKEN;

    const response = await fetch(url.toString(), {
        headers: {
            Authorization: `Bearer ${apiToken}`,
            'Content-Type': 'application/json'
        },
        next: {revalidate: 60},
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
    }
    return await response.json();
}
