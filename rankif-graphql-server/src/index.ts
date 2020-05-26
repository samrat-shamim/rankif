import {GraphQLServer} from 'graphql-yoga'
import {prisma} from "../generated/prisma-client";
import {Mutation} from "./resolvers/mutations";
import {Query} from "./resolvers/query";

const resolvers = {
    Query,
    Mutation
}

const server = new GraphQLServer({
    typeDefs: 'schema/schema.graphql',
    resolvers,
    context: {prisma}
})
server.start(() => console.log(`Server is running on http://localhost:4000`))