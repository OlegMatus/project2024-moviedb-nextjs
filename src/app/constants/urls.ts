export const baseURLS = process.env.NEXT_PUBLIC_APP_URL_API;
export const basePosterURL = process.env.NEXT_PUBLIC_APP_POSTER;
export const baseTrailerURL = process.env.NEXT_PUBLIC_APP_TRAILER;

export const movies = '/discover/movie';
export const genres = '/genre/movie/list';
export const searchMovie = '/search/movie';

export const movieById = (id: number | string): string => `/movie/${id}`;
export const videos = (id: number):string => `${movieById(id)}/videos`;

export const popular = '/movie/popular';
export const now_playing = '/movie/now_playing';
export const top_rated = '/movie/top_rated';
export const upcoming = '/movie/upcoming';