import post, {posts} from './post'

const items = [
    {name: "Arroz"},
    {name: "Feijão"},
    {name: "Banana"},
    {name: "Caderno"}
]

export const resolvers = {
    Query: {
        items: () => items,
        posts: () => posts,
        post: (parent, args) => posts.find(post => post.id === args.id),
    },
    Mutation: {
        ...post
    }


}
