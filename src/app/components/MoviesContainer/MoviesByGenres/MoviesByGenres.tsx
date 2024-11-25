// import React from 'react';
// import {getMoviesByGenreId} from "@/app/actions/getMoviesByGenreId";
// import {MovieCard} from "@/app/components/MoviesContainer/MovieCard/MovieCard";
//
// type Params = {
//     genreId: string;
//     page: number
// }
// const MoviesByGenres = async ({params}: { params: Params }) => {
//         const {genreId, page} = params;
//
//         const {results: moviesByGenres} = await getMoviesByGenreId(genreId, page);
//
//         return (
//             <div>
//                 {moviesByGenres && moviesByGenres.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
//             </div>
//         );
//     }
// ;
//
// export default MoviesByGenres;