import {GraphQLServer} from 'graphql-yoga'
import {Mutation} from "./resolvers/mutations";
import {Query} from "./resolvers/query";
import {exec} from "child_process";

const resolvers = {
    Query,
    Mutation
}

async function importPrisma() {
    try {
        // @ts-ignore
        return await import("../generated/prisma-client");
    } catch (e) {
        console.log(e);
        return e;
    }
}
let i = 0;
deployPrisma();

async function deployPrisma() {
    i++;
    console.log("Deploying prisma for " + i + "th time");
    exec("npm run prisma-deploy", async (err, stdout) => {
        if (err) {
            console.log(err);
            waitAndDeployAgain();
        } else {
            const status = await startApplication()
           if ( status !=0){
               console.log(status);
               exec("ls", (e, stdout, stderr)=>{
                   console.log(e, stdout, stderr);
               })
               waitAndDeployAgain();
           }
        }
    })
}

function waitAndDeployAgain() {
    setTimeout(() => {
        deployPrisma();
    }, 2000 * i)
}

async function startApplication() {
    try {
        const prisma = await importPrisma();
        if (prisma.prisma) {
            const server = new GraphQLServer({
                typeDefs: 'schema/schema.graphql',
                resolvers,
                context: {prisma: prisma.prisma}
            })
            server.start(() => console.log(`Server is running on http://localhost:4000`))
            return 0;
        } else throw new Error("Prisma client not found");
    } catch (e) {
        return e;
    }
}


