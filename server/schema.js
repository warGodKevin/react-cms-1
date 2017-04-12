import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} from 'graphql/type';

const count = 0;
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: GraphQLInt,
        resolve() {
          return count;
        },
      },
    },
  }),
});

export default schema;
