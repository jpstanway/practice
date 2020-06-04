function isUnique(str) {
  if (!str || typeof str != "string") {
    return false;
  }

  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let key = str[i].charCodeAt(0);

    if (obj[key]) {
      return false;
    } else {
      obj[key] = str[i];
    }
  }

  return true;
}

isUnique("string");
