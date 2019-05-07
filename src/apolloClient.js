import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://movieql.now.sh/' // movieql-server url
});

export default client;