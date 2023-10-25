const checkStringLength = function (string, maxLength) {
  return string.length <= maxLength;
};

const isPalindrom = function (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let stringBackward = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringBackward += string[i];
  }
  return string === stringBackward;
};

const getNumbers = function (string) {
  let numbers = '';
  if (!Number.isNaN(string)) {
    string = string.toString();
  }
  string = string.replaceAll(' ', '');

  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] >= 0) {
      parseInt(string[i], 10);
      numbers += string[i];
    }
  }
  return parseInt(numbers, 10);
};
