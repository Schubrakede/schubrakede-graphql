const { ApolloServer, gql } = require("apollo-server");
const casual = require("casual");

// Definitions

const typeDefs = gql`
  """
  Description
  """
  type Customer {
    name: String
    company: Company
    role: String
  }

  type Company {
    name: String
    amountEmployees: Int
    adress: String
  }

  type Schubrakede {
    workExamples: String
    workedFor: [Company]
    primer: String
    products: [Product]
    howWeWork: String
    team: [TeamMember]
    blog: [Blogarticle]
    partners: [Partner]
    legalData: String
  }

  type Blogarticle {
    name: String
    image: String
    content: String
    author: Author
  }

  type Product {
    name: String
    duration: String
    targetGroup: [Company]
    priceRange: Float
    isRemote: Boolean
  }

  type Skill {
    name: String
  }

  type Partner {
    name: String
    Image: String
    description: String
    link: String
  }

  type TeamMember {
    name: String
    photo: String
    skills: [Skill]
    title: String
    links: String
  }

  type Author {
    name: String
    decription: String
    twitterlink: String
  }

  type Query {
    customer: [Customer]
    schubrakede: [Schubrakede]
    products: [Product]
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
    customer: () => customer
  }
};

const server = new ApolloServer({ typeDefs, resolvers, mocks });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
