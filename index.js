const { ApolloServer, gql } = require("apollo-server");
const casual = require("casual");

// Definitions

const typeDefs = gql`
  """
  Description
  """
  type Demo {
    name: String
  }

  type Query {
    demos: [Demo]
  }
`;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Mock Data

const mocks = {
  Demo: () => ({
    name: casual.name
  })
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const resolvers = {
  Query: {
    demos: () => demos
  }
};

const server = new ApolloServer({ typeDefs, resolvers, mocks });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
