import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query{
    content:String,
    title:String
  }
`);
const rootValue = {
  content: () => 'Content Management System',
  title: () => 'CMS',
};
const app = express();
app.options('/graphql', cors());
app.use('/graphql', graphqlHTTP((request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  console.log(`${request.get('origin')} ${request.method} ${request.get('content-type')} ${response.statusCode}`);
  return {
    schema,
    rootValue,
    graphiql: true,
  };
}));
const listen = app.listen(8000);
console.info(`Listen on ${listen.address().address}:${listen.address().port}`);
