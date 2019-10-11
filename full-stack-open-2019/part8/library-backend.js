require("dotenv").config();
const { ApolloServer, gql, UserInputError, PubSub } = require("apollo-server");
const pubsub = new PubSub();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Book = require("./models/Book");
const Author = require("./models/Author");
const User = require("./models/User");

const MONGO_URI = process.env.MONGO_URI;
const USER_PASSWORD = process.env.USER_PASSWORD;
const JWT_SECRET = process.env.SECRET;

console.log("connecting to database");

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("connected to MongoDB"))
  .catch(error => console.log(error.message));

const typeDefs = gql`
  type Query {
    hello: String!
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
    me: User
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(name: String!, setBornTo: Int!): Author
    createUser(username: String!, favoriteGenre: String!): User
    login(username: String!, password: String!): Token
  }

  type Subscription {
    bookAdded: Book!
  }

  type Book {
    title: String!
    author: Author!
    published: Int!
    genres: [String!]!
    id: ID!
  }

  type Author {
    name: String!
    born: Int
    bookCount: Int!
    id: ID!
  }

  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }

  type Token {
    value: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "world";
    },
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      if (args.author && args.genre) {
        const books = await Book.find({
          genres: { $in: [args.genre] }
        }).populate("author");

        return books.filter(book => book.author.name === args.author);
      } else if (args.author) {
        const books = await Book.find({}).populate("author");

        return books.filter(book => book.author.name === args.author);
      } else if (args.genre) {
        return await Book.find({ genres: { $in: [args.genre] } }).populate(
          "author"
        );
      } else {
        return await Book.find({}).populate("author");
      }
    },
    allAuthors: () => {
      console.log("Author.find");
      return Author.find({});
    },
    me: (root, args, context) => {
      return context.currentUser;
    }
  },
  Mutation: {
    addBook: async (root, args, context) => {
      if (!context.currentUser) {
        throw new UserInputError(
          "you must be logged in to complete this action"
        );
      }

      try {
        // find if author exists in db
        let author = await Author.findOne({ name: args.author });

        // if no author found, create new one
        if (!author) {
          author = new Author({ name: args.author });
          author = await author.save();
        }

        // construct new book
        const book = new Book({ ...args, author: author._id });

        pubsub.publish("BOOK_ADDED", { bookAdded: book });

        // save new book to database
        return await book.save();
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
      }
    },
    editAuthor: async (root, args, context) => {
      if (!context.currentUser) {
        throw new UserInputError(
          "you must be logged in to complete this action"
        );
      }

      const updateObject = { born: args.setBornTo };

      try {
        const updatedAuthor = await Author.findOneAndUpdate(
          { name: args.name },
          updateObject,
          { new: true }
        );
        if (!updatedAuthor) return null;
        return updatedAuthor;
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
      }
    },
    createUser: async (root, args) => {
      const user = new User({
        username: args.username,
        favoriteGenre: args.favoriteGenre
      });

      try {
        return await user.save();
      } catch (error) {
        throw new UserInputError(error.message, { invalidArgs: args });
      }
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username });

      if (!user || args.password !== USER_PASSWORD) {
        throw new UserInputError("wrong credentials");
      }

      const userTokenData = {
        username: user.username,
        id: user._id
      };

      return { value: jwt.sign(userTokenData, JWT_SECRET) };
    }
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator(["BOOK_ADDED"])
    }
  },
  Author: {
    bookCount: async root => {
      const books = await Book.find({ author: root._id });
      return books.length;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith("bearer ")) {
      const decodedToken = jwt.verify(auth.substring(7), JWT_SECRET);
      const currentUser = await User.findById(decodedToken.id);
      return { currentUser };
    }
  }
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Server ready at ${url}`);
  console.log(`Subscriptions ready at ${subscriptionsUrl}`);
});
