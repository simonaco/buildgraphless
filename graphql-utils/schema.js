const { buildSchema } = require('graphql')
const typeDefs = buildSchema(`
  type Query {
    hello(name:String):String
    teams:[Team]
  }
  type Mutation {
    incrementPoints(id:ID):Team
  }
  type Team {
    id: ID
    name: String
    points: Int
  }
`)

module.exports.typeDefs = typeDefs
