// db
import db from "./_db.js";

export const resolvers = {
  Query: {
    quotes() {
      return db.quotes;
    },
    authors() {
      return db.authors;
    },
    topics() {
      return db.topics;
    },
  },
};
