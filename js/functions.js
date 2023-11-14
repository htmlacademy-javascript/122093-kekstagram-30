const checkStringLength = function (string, maxLength) {
  return string.length <= maxLength;
};
checkStringLength();

const isPalindrom = function (string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let stringBackward = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringBackward += string[i];
  }
  return string === stringBackward;
};
isPalindrom();

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
getNumbers();

const getMeetingInWorkTime = function (workStart, workEnd, meetingTime, meetingDuration) {
  const times = [workStart, workEnd, meetingTime];
  for (let i = 0; i < times.length; i++) {
    const time = times[i].split(':');
    times[i] = +time[0] * 60 + +time[1];
  }
  return (times[2] >= times[0] && times[2] + meetingDuration <= times[1]);
};
window.console.log(getMeetingInWorkTime('08:00', '17:30', '14:00', 90));
