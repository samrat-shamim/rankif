import { GraphQLServer, MockList } from 'graphql-yoga'
const typeDefs = `
 type Query {
     hello: String!
     listOfStrings: [String]
 }
`

const resolvers  = {
    Query:{
        hello: ()=> "Hello world",
        listOfStrings: ()=> ["string 1", "string 2"]
    }
}

const server = new GraphQLServer({typeDefs, resolvers })
server.start(() => console.log(`Server is running on http://localhost:4000`))