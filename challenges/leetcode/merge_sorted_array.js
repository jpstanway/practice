var merge = function (nums1, m, nums2, n) {
  let start = m - 1;
  let end = nums1.length - 1;

  while (nums2.length > 0) {
    if (nums1[start] > nums2[nums2.length - 1]) {
      nums1[end] = nums1[start];
      start--;
    } else {
      nums1[end] = nums2.pop();
    }

    end--;
  }
};
