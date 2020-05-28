import {GraphQLServer} from 'graphql-yoga'
import {Mutation} from "./resolvers/mutations";
import {Query} from "./resolvers/query";

const resolvers = {
    Query,
    Mutation
}
async function importPrisma() {
    // @ts-ignore
    return  await import("../generated/prisma-client");

}
importPrisma().then(prisma=> {
    const server = new GraphQLServer({
        typeDefs: 'schema/schema.graphql',
        resolvers,
        context: {prisma}
    })
    server.start(() => console.log(`Server is running on http://localhost:4000`))
}, error => {
    console.log(error);
})


