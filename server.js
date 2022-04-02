import {ApolloServer, gql} from "apollo-server"


const users = [
    {
        id:"1",
        firstName: "Md. Rafiqul",
        lastName: "Islam",
        email: "rafiqul.pust.cse@gmail.com",
        password: "123456"
    },
    {
        id:"2",
        firstName: "Kamrunnahar",
        lastName: "Siddika",
        email: "siddika.cse@gmail.com",
        password: "123456"
    },
]
// Create Schema
const typeDefs = gql`
    type Query{
        users: [User],
        user(id: ID!): User,
    }
input UserInput{
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}
type Mutation{
    createNewUser(newUser: UserInput!): User
}

    type User{
        id: ID
        firstName: String
        lastName: String
        email: String
    }
`

//Create resolvers

const resolvers = {
    Query: {
        users: ()=> users,
        user: (parent,args, context)=> {
            return users.find( user => user.id === args.id)
        }
    },
    Mutation: {
        createNewUser: (_,{newUser}) =>{
            const user ={
                id:"sjj-nfjf",
                ...newUser
            }
            users.push(user)
            return user
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then( ({url})=> {
    console.log(`Server ready at ${url}`)
})