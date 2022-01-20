import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import FooQuery from "./FooQuery.graphql";

const pre = document.createElement("pre");
document.body.appendChild(pre);

try {
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
  pre.innerHTML = JSON.stringify(FooQuery, null, 2);
} catch (error) {
  console.log(error);
}

// pre.innerHTML = "Hello, world!";
