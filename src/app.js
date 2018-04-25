const { GraphQLServer } = require('graphql-yoga')
import types from './datamodel/types'
import { resolvers } from './resolvers'

const options = { port: 4000, playground: '/'}
const server = new GraphQLServer({typeDefs: './src/datamodel/schema.graphql', resolvers, playground: false})

server.start(options, () => {
    console.log(`Server is running on localhost: ${options.port}`)
})