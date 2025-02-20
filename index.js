import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mongoose } from "mongoose";

//types
import { typeDefs } from "./schema.js";

// resolvers
import { resolvers } from "./resolvers.js";

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port 4000`);

// connect to mongo db
mongoose.connect("mongodb://localhost:27017/quoteLibrary", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MonogDB connection error: "));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
