module.exports = function check(str, bracketsConfig) {
  const strArr = bracketsConfig.map(arr => {
    return `${arr[0]}${arr[1]}`;
  })
  let prevLength = str.length

  while (str.length) {
    strArr.forEach((item) => {
      str = str.replaceAll(item, "");
    });
    if (str.length === prevLength) {
      return false;
    }
    prevLength = str.length;
  }

  return true;
}


