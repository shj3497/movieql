import { GraphQLServer } from 'graphql-yoga';
// import resolvers from './graphql/basic/resolvers';
import resolvers from './graphql/movieAPI/resolvers';

// TODO 기본 예제 
// const server = new GraphQLServer({
//   typeDefs: "graphql/basic/schema.graphql",
//   resolvers
// });


// TODO MovieAPI를 활용한 예제
const server = new GraphQLServer({
  typeDefs: "graphql/movieAPI/schema.graphql",
  resolvers
});

server.start(() => console.log("GraphQL Server Running on localhost:4000"))
