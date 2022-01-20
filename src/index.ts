import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      foo: {
        type: GraphQLString,
        resolve: () => "bar",
      },
    },
  }),
});

(window as any).schema = schema;

const div = document.createElement("div");
div.innerHTML = "Hello, world!";

document.body.appendChild(div);
