var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
var Trie = function () {
  this.root = new Node();

  this.add = function (word, node = this.root) {
    // base case, if length of word is 0
    // set this node as end and return
    if (word.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(word[0])) {
      // else if first letter of word does not exist
      // as key in current node then set key and
      // recurse this function with rest of word and latest set key
      node.keys[word[0]] = new Node();
      return this.add(word.substr(1), node.keys[word[0]]);
    } else {
      // else letter already exists, recurse this func with rest of word
      return this.add(word.substr(1), node.keys[word[0]]);
    }
  };

  this.print = function () {
    let words = [];
    // create function that takes current node and string
    let getStrings = function (node, string) {
      // if node has keys
      let keys = Object.keys(node.keys);

      if (!node.isEnd() || keys.length > 0) {
        // loop through node keys,
        // for each letter, recursively call func
        // passing in letter node, and building string with letter (concat)
        for (let letter of keys) {
          let nextNode = node.keys[letter];
          let currentString = string.concat(letter);

          getStrings(nextNode, currentString);
        }
      } else {
        // else if node has no keys
        // push word to words array and
        // return to end function
        words.push(string);
        return;
      }
    };
    // first call of search function passing in root and an empty string
    getStrings(this.root, "");
    // return words array
    return words;
  };

  this.isWord = function (word) {
    let node = this.root;
    // while word has length greater than 1
    while (word.length > 0) {
      // check if current node has letter
      if (node.keys[word[0]]) {
        // if so, move forward in trie
        // and chop off first letter in word
        node = node.keys[word[0]];
        word = word.substr(1);
      } else {
        // if not, return false
        return false;
      }
    }

    // finally return true if last node (letter) is the end
    return node.isEnd();
  };
};
