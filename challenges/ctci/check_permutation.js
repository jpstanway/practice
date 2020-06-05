// given two strings, check to see if one string
// is a permutation of the other
function checkPermutation(str1, str2) {
  if (
    !str1 ||
    !str2 ||
    typeof str1 != "string" ||
    typeof str2 != "string" ||
    str1.length != str2.length
  ) {
    return false;
  }

  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    obj[str1[i].charCodeAt(0)] = str1[i];
  }

  for (let j = 0; j < str2.length; j++) {
    let key = str2[j].charCodeAt(0);

    if (!obj[key]) {
      return false;
    }
  }

  return true;
}

checkPermutation("abc", "bac");
