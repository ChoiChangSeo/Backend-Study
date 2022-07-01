import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema
// graphql type이다. schema 이름은 바뀌어도 상관없다.
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
// api들을 resolvers 라고 부름 이름은 다른걸로 바꿔도 상관없다.
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
