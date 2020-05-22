import {GraphQLServer} from 'graphql-yoga'
import {prisma} from "../generated/prisma-client";

const resolvers = {
    Query: {
        posts: (root: any, args: any, context: any) => {
            return context.prisma.posts();
        },
        users: (root: any, args: any, context: any) => {
            return context.prisma.users();
        },
    },
    Mutation: {
        createUser: (root: any, args: any, context: any) => {
            return context.prisma.createUser({
                Name: args.Name,
                Email: args.Email
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {prisma}
})
server.start(() => console.log(`Server is running on http://localhost:4000`))