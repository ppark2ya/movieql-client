import gql from 'graphql-tag'; // a way we can write graphQL on the frontend

export const HOME_PAGE = gql`
    {
        movies(limit: 50, rating: 7) {
            id
            title
            medium_cover_image
            rating
        }
    }
`;

export const MOVIE_DETAILS = gql`
    query getMovieDetails($movieId: Int!) {
        movie(id: $movieId) {
            medium_cover_image
            title
            rating
            description_intro
            language
            genres
        }
        suggestions(id: $movieId) {
            id
            title
            rating
            medium_cover_image
        }
    }
`;