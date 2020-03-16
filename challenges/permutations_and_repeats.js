function permAlone(str) {
  // create function to get all permutations
  function getPermutations(str) {
    const permutations = [];

    if (str.length < 2) {
      return str;
    }

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let remainingString = str.slice(0, i) + str.slice(i + 1, str.length);

      for (let subPermutation of getPermutations(remainingString)) {
        permutations.push(char + subPermutation);
      }
    }

    return permutations;
  }

  const permutationArr = [...getPermutations(str)];

  // iterate over permutations array counting repeating letters
  let repeats = 0;

  permutationArr.forEach(perm => {
    let repeatChar = 0;
    for (let j = 0; j < perm.length; j++) {
      let char = perm[j];
      if (char === perm[j + 1]) {
        repeatChar++;
      }
    }
    if (repeatChar === 0) {
      repeats++;
    }
  });

  return repeats;
}

permAlone("aab");
