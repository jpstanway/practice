import { GraphQLServer } from "graphql-yoga";

// 5 Scalar Types = String, Boolean, Int, Float, ID

// Demo user data
const users = [
  {
    id: "1",
    name: "Andrew",
    email: "andrew@ewxample.com",
    age: 27
  },
  {
    id: "2",
    name: "Sara",
    email: "sara@example.com"
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@example.com"
  }
];

// Demo post data
const posts = [
  {
    id: "100",
    title: "How to train your dog",
    body: "Here are 10 things to teach your dog",
    published: true,
    author: "1"
  },
  {
    id: "155",
    title: "Why you should not eat sugar",
    body: "5 reasons sugar is bad for you",
    published: false,
    author: "1"
  },
  {
    id: "366",
    title: "Summertime in Calgary",
    body: "Things to do in Calgary during the hot months",
    published: true,
    author: "2"
  }
];

// Demo comment data
const comments = [
  {
    id: "111",
    text: "Hey I like your post",
    author: "3",
    post: "100"
  },
  {
    id: "222",
    text: "Not sure I agree with this post",
    author: "2",
    post: "366"
  },
  {
    id: "333",
    text: "Very interesting",
    author: "1",
    post: "155"
  },
  {
    id: "444",
    text: "This was offensive",
    author: "2",
    post: "100"
  }
];

// Type definitions (schema)
const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments: [Comment!]!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment!]!
    }

    type Comment {
      id: ID!
      text: String!
      author: User!
      post: Post!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }

      return users.filter(user => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter(post => {
        return (
          post.title.toLowerCase().includes(args.query.toLowerCase()) ||
          post.body.toLowerCase().includes(args.query.toLowerCase())
        );
      });
    },
    comments(parent, args, ctx, info) {
      return comments;
    },
    me() {
      return {
        id: "123098",
        name: "Mike",
        email: "mike@example.com",
        age: 28
      };
    },
    post() {
      return {
        id: "987qwerty",
        title: "Where is the gym?",
        body: "10 gyms near Calgary centre",
        published: true
      };
    }
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find(user => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter(comment => {
        return comment.post === parent.id;
      });
    }
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter(post => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter(comment => {
        return comment.author === parent.id;
      });
    }
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find(user => {
        return user.id === parent.author;
      });
    },
    post(parent, args, ctx, info) {
      return posts.find(post => {
        return post.id === parent.post;
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("This server is up");
});
