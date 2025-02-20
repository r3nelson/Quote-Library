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
        quote(id: ID!): Quote
        authors: [Author]
        author(id: ID!): Author
        topics: [Topic]
        topic(id: ID!): Topic
    }
    type Mutation {
    addAuthor(Author: AddAuthorInput!): Author
    deleteAuthor(id: ID!): [Author]
    updateAuthor(id: ID!, edits: EditAuthorInput): Author
    }
    input AddAuthorInput {
        name: String!,
        quotes: [Quote!]
    }
    input EditAuthorInput {
        name: String,
        quotes: [Quote!]
    }
`;
