const axios = require('axios')
const resolvers = {
  hello: async obj => {
    return `Hello ${obj.name}`
  },
  teams: async () => {
    const res = await axios.get(
      'https://graphqlvoting.azurewebsites.net/api/score'
    )
    return res.data
  },
  incrementPoints: async (obj, args) => {
    const collection = args.client.collection('Team')
    const team = await collection.findOneAndUpdate(
      { id: obj.id },
      { $inc: { points: 1 } }
    )
    return team.value
  },
}

module.exports.resolvers = resolvers
