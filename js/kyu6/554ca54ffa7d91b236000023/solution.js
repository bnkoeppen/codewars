function deleteNth(arr, n) {
  let times = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (times[arr[i]] == undefined) times[arr[i]] = 0;
    if (times[arr[i]] < n) {
      newArr.push(arr[i]);
      times[arr[i]]++;
    }
  }
  return newArr;
}
