var validMountainArray = function (A) {
  if (A.length < 3) {
    return false;
  }

  let peak;

  for (let i = 0; i < A.length - 1; i++) {
    if (!peak) {
      if (!(A[i] < A[i + 1])) {
        peak = A[i];
      }
    }

    if (peak) {
      if (!(A[i] > A[i + 1]) || i == 0) {
        return false;
      }
    }
  }

  return peak ? true : false;
};
