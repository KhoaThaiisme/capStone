// import express from 'express'
// import dotenv from 'dotenv';
// import { buildSchema } from 'graphql'
// import { graphqlHTTP } from 'express-graphql'

// dotenv.config();

// const app = express();
// const port = process.env.PORT;

// app.get('/graphql', graphqlHTTP({
//     schema: buildSchema(`
//         type RootQuery {
//             events: [String!]!
//         }

//         type RootMutation {
//             createEvent(name: String): String
//         }

//         schema {
//             query: RootQuery
//             mutation: RootMutation
//         }
//     `),
//     rootValue: {
//         events: () => {
//             return ['Romantic Cooking', 'Sailing', 'All-night Coding']
//         },
//         createEvent: (args) => {
//             const eventName = args.name;
//             return eventName;
//         }
//     },// bundle of resolvers we have, have to match keys in buildSchema
//     graphiql: true
// })); // query: fetch data, mutation: change data (include crud)

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });