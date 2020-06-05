// given a string, check to see if all letters are unique
// or if there are duplicate letters in the string
// (do not use additional data structures)
function isUnique(str) {
  if (!str || typeof str != "string") {
    return false;
  }

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (newStr.includes(str[i])) {
      return false;
    }

    newStr += str[i];
  }

  return true;
}

isUnique("abc");
