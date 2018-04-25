const typeDefs = `
  type Query {
    items: [Item!]!
    posts: [Post!]!
    post(id: ID!): Post!
  }

  type Mutation {
    createDraft(title: String!, content: String): Post
    deletePost(id: ID!): Post
    publish(id: ID!): Post
  }

  type Item {
    name: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
  }
`;

export default typeDefs