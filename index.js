const { GraphQLServer } = require("graphql-yoga");
const casual = require("casual");

// Definitions

const typeDefs = `
  """
  Description
  """
  type Customer {
    name: String
    role: String
    company: Company
  }

  type Company {
    name: String
    amountEmployees: Int
    adress: String
  }

  type Schubrakede {
    workExamples: [WorkExample]
    workedFor: [Company]
    primer: String
    products: [Product]
    howWeWork: String
    blog: [Blogarticle]
    team: [TeamMember]
    partners: [Partner]
    legalData: String
  }

  type WorkExample {
    images: String
    description: String
    client: Company
  }

  type Blogarticle {
    name: String
    image: String
    content: String
    author: Author
  }

  type Product {
    name: String
    isRemote: Boolean
    duration: String
    targetGroup: [Company]
    priceRange: Float
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

const options = {
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

const server = new GraphQLServer({ typeDefs, resolvers, mocks });
server.start(options, () => console.log("Server is running on localhost:4000"));
