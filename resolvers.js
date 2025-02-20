// db
import db from "./_db.js";

export const resolvers = {
  Query: {
    quotes() {
      return db.quotes;
    },
    quote(_, args) {
      return db.quotes.find((quote) => quote.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    topics() {
      return db.topics;
    },
    topic(_, args) {
      return db.topics.find((topic) => topic.id === args.id);
    },
  },
};
