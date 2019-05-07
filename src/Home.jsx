import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Movie from "./Movie";
import { HOME_PAGE } from './queries';
import { useQuery } from 'react-apollo-hooks';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.7fr);
    flex-wrap: wrap;
    justify-items: center;
`;

const Home = () => {
    const { data, loading, error } = useQuery(HOME_PAGE);
    return (
        // <Query query={HOME_PAGE}>
        //     {/* children must return functional component */}
        //     {
        //         ({ loading, data, error }) => {
        //             if(loading) {
        //                 return <span>loading</span>;
        //             }
        //             if(error) {
        //                 return <span>something happend</span>
        //             }
        //             if(data) {
        //                 console.log(data);
        //                 return data.movies.map(movie => <h2 key={movie.id}>{movie.title} / {movie.rating}</h2>)
        //             }
        //         }
        //     }
        // </Query>
        <Container>
            <Helmet>
                <title>Home | MovieQL</title>
            </Helmet>
            { loading && "loading" }
            { error && "Something is wrong" }
            { 
                !loading &&
                data &&
                data.movies &&
                data.movies.map(movie => (
                    <Movie 
                        id={movie.id}
                        key={movie.id}
                        poster={movie.medium_cover_image}
                        title={movie.title}
                        rating={movie.rating}
                    />
                ))
            }
        </Container>
    );
};

export default Home;