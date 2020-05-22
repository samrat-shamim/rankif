import { GraphQLServer } from 'graphql-yoga'
const users = [
    {
        id: 1,
        Name: "Samrat",
        Email: "samrat@rankif.com"
    }
]
const posts = [{
    id: 1,
    UserId: 1,
    Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Attachments: [],
    LikeCount: 5,
    CommentCount: 2,
    ShareCount: 1,
    Score: 8
}]

const resolvers  = {
    Query:{
        posts: ()=> posts,
        users: ()=> users
    }
}

const server = new GraphQLServer({typeDefs: './src/schema.graphql', resolvers })
server.start(() => console.log(`Server is running on http://localhost:4000`))