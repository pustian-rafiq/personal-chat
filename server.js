import {ApolloServer, gql} from "apollo-server"

// Create Schema
const typeDefs = gql`
    type Query{
        greet: String
    }
`

//Create resolvers

const resolvers = {
    Query: {
        greet: ()=> "Hello Rafiqul"
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then( ({url})=> {
    console.log(`Server ready at ${url}`)
})