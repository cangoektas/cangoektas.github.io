import { execute } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import schemaDocument from "./schema.graphql";
import FooQuery from "./FooQuery.graphql";

const pre = document.createElement("pre");
document.body.appendChild(pre);

try {
  const schema = makeExecutableSchema({
    typeDefs: schemaDocument,
    resolvers: {
      Query: {
        foo: () => "baz",
      },
    },
  });

  const result = execute({ schema, document: FooQuery });
  pre.innerHTML = JSON.stringify(result, null, 2);
} catch (error) {
  console.log(error);
}
