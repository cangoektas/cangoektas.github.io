import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  execute,
} from "graphql";
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

  const result = execute({ schema, document: FooQuery });
  pre.innerHTML = JSON.stringify(result, null, 2);
} catch (error) {
  console.log(error);
}
