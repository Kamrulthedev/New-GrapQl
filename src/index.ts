import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    discription : String
  }
  type Query {
    books: [Book]
  }
`;


const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
        discription : "Hello GraphQl"
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
         discription : "Hello GraphQl Hey"
    },
];




const resolvers = {
    Query: {
      books: () => books,
    },
  };



const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);