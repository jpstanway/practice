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

const db = {
  users,
  posts,
  comments
};

export { db as default };
