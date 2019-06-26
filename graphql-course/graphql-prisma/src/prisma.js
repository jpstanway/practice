import { Prisma } from "prisma-binding";
import { fragmentReplacements } from "./resolvers/index";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://192.168.99.100:4466",
  secret: "thisismysupersecrettext",
  fragmentReplacements
});

export { prisma as default };

// prisma.query prisma.mutation prisma.subscription prisma.exists

// prisma.exists
//   .Comment({
//     id: "cjwwj65y5003s0750hm0zp9mm",
//     author: {
//       id: "cjwwiuq03003l0750ti0ksf7x"
//     }
//   })
//   .then(exists => {
//     console.log(exists);
//   });

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId });

//   if (!userExists) {
//     throw new Error("User does not exist");
//   }

//   const post = await prisma.mutation.createPost(
//     {
//       data: {
//         ...data,
//         author: {
//           connect: {
//             id: authorId
//           }
//         }
//       }
//     },
//     "{ author { id name email posts { id title published } } }"
//   );

//   return post.author;
// };

// // createPostForUser("cjwwiuq03003l0750ti0ksf7x", {
// //   title: "Great books to read",
// //   body: "The War of Art",
// //   published: true
// // })
// //   .then(user => {
// //     console.log(JSON.stringify(user, undefined, 2));
// //   })
// //   .catch(error => {
// //     console.log(error.message);
// //   });

// const updatePostForUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId });

//   if (!postExists) {
//     throw new Error("Post does not exist");
//   }

//   const post = await prisma.mutation.updatePost(
//     {
//       where: {
//         id: postId
//       },
//       data: {
//         ...data
//       }
//     },
//     "{ author { id name email posts { id title published } } }"
//   );

//   return post.author;
// };

// // updatePostForUser("cjwzjxy4c00170751dqknco9h", {
// //   title: "10 great books to read this fall"
// // })
// //   .then(user => {
// //     console.log(JSON.stringify(user, undefined, 2));
// //   })
// //   .catch(error => {
// //     console.log(error.message);
// //   });
