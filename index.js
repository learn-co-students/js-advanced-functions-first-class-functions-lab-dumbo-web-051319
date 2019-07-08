// Code your solution in this file!

const returnFirstTwoDrivers = function(arrDrivers) {
  return [arrDrivers[0], arrDrivers[1]];
}

const returnLastTwoDrivers =  function(arrDrivers) {
  let lastTwoAndUndefined = [arrDrivers[arrDrivers.length - 2], arrDrivers[arrDrivers.length - 1]];
  // let lastTwo = lastTwoAndUndefined.filter((driver) => {driver != undefined});
  // return lastTwo;
  return lastTwoAndUndefined;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function(int) {
    return int * 5;
  }
}

function fareDoubler(int) {
  return ((createFareMultiplier(int)(int)) / 5) * 2;
}

function fareTripler(int) {
  let doubled = ((createFareMultiplier(int)(int)) / 5) * 2;
  return (doubled / 2) * 3;
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}
