const reverseString = function (str) {
  let box = [];
  let newStr = str.split("");
  for (let i = 0; i < newStr.length; i++) {
    box.push(newStr[i]);
  }

  return box.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
