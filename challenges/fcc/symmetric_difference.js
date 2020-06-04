function sym(args) {
  const combined = [...arguments];
  const filtered = combined.reduce((acc, cur) => {
    let sub = [];

    // clear duplicates in subarray
    for (let i = 0; i < cur.length; i++) {
      let subIndex = sub.indexOf(cur[i]);

      if (subIndex === -1) {
        sub.push(cur[i]);
      }
    }

    // search acc for duplicates
    for (let j = 0; j < sub.length; j++) {
      let index = acc.indexOf(sub[j]);

      if (index > -1) {
        // if number exists, remove it
        acc.splice(index, 1);
      } else {
        acc.push(sub[j]);
      }
    }
    return acc;
  }, []);

  return filtered;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
