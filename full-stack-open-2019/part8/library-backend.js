require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const Book = require("./models/Book");
const Author = require("./models/Author");

const MONGO_URI = process.env.MONGO_URI;

console.log("connecting to database");

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("connected to MongoDB"))
  .catch(error => console.log(error.message));

let authors = [
  {
    name: "Robert Martin",
    id: "afa51ab0-344d-11e9-a414-719c6709cf3e",
    born: 1952
  },
  {
    name: "Martin Fowler",
    id: "afa5b6f0-344d-11e9-a414-719c6709cf3e",
    born: 1963
  },
  {
    name: "Fyodor Dostoevsky",
    id: "afa5b6f1-344d-11e9-a414-719c6709cf3e",
    born: 1821
  },
  {
    name: "Joshua Kerievsky", // birthyear not known
    id: "afa5b6f2-344d-11e9-a414-719c6709cf3e"
  },
  {
    name: "Sandi Metz", // birthyear not known
    id: "afa5b6f3-344d-11e9-a414-719c6709cf3e"
  }
];

/*
 * It would be more sensible to assosiate book and the author by saving
 * the author id instead of the name to the book.
 * For simplicity we however save the author name.
 */

let books = [
  {
    title: "Clean Code",
    published: 2008,
    author: "Robert Martin",
    id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
    genres: ["refactoring"]
  },
  {
    title: "Agile software development",
    published: 2002,
    author: "Robert Martin",
    id: "afa5b6f5-344d-11e9-a414-719c6709cf3e",
    genres: ["agile", "patterns", "design"]
  },
  {
    title: "Refactoring, edition 2",
    published: 2018,
    author: "Martin Fowler",
    id: "afa5de00-344d-11e9-a414-719c6709cf3e",
    genres: ["refactoring"]
  },
  {
    title: "Refactoring to patterns",
    published: 2008,
    author: "Joshua Kerievsky",
    id: "afa5de01-344d-11e9-a414-719c6709cf3e",
    genres: ["refactoring", "patterns"]
  },
  {
    title: "Practical Object-Oriented Design, An Agile Primer Using Ruby",
    published: 2012,
    author: "Sandi Metz",
    id: "afa5de02-344d-11e9-a414-719c6709cf3e",
    genres: ["refactoring", "design"]
  },
  {
    title: "Crime and punishment",
    published: 1866,
    author: "Fyodor Dostoevsky",
    id: "afa5de03-344d-11e9-a414-719c6709cf3e",
    genres: ["classic", "crime"]
  },
  {
    title: "The Demon",
    published: 1872,
    author: "Fyodor Dostoevsky",
    id: "afa5de04-344d-11e9-a414-719c6709cf3e",
    genres: ["classic", "revolution"]
  }
];

const typeDefs = gql`
  type Query {
    hello: String!
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book
    editAuthor(name: String!, setBornTo: Int!): Author
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
`;

const resolvers = {
  Query: {
    hello: () => {
      return "world";
    },
    bookCount: () => Book.collection.countDocuments(),
    authorCount: () => Author.collection.countDocuments(),
    allBooks: async (root, args) => {
      // if (args.author && args.genre) {
      //   return Book.find({ author: args.author }).then(books =>
      //     books.filter(book => book.genres.includes(args.genre))
      //   );
      // } else if (args.author) {
      //   return Book.find({ author: args.author });
      if (args.genre) {
        return await Book.find({ genres: { $in: [args.genre] } });
      } else {
        return await Book.find({});
      }
    },
    allAuthors: () => Author.find({})
  },
  Mutation: {
    addBook: async (root, args) => {
      // find if author exists in db
      let author = await Author.findOne({ name: args.author });

      // if no author found, create new one
      if (!author) {
        author = new Author({ name: args.author });
        author = await author.save();
      }

      // construct new book
      const book = new Book({ ...args, author: author._id });

      // save new book to database
      try {
        return await book.save();
      } catch (error) {
        throw new UserInputError(error.message);
      }
    },
    editAuthor: async (root, args) => {
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
        throw new Error(error.message);
      }
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
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
