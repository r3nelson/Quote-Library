export const typeDefs = `#graphql
    type Quote{
        id: ID!,
        quote: String!,
        rating: Int!,
        author: String,
        topic: String,
        sourceMaterial: String,
        additionalInfo: String,
    }
    type Author{
        id: ID!,
        name: String!,
        quotes: [Quote]
    }
    type Topic{
        id: ID!,
        name: String!,
        quotes: [Quote]
    }
    # used to make endpoints for queries
    type Query {
        quotes: [Quote]
        authors: [Author]
        topics: [Topic]
    }
`;
