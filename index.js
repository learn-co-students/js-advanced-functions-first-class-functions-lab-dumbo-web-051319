// Code your solution in this file!
const returnFirstTwoDrivers = arr => arr.slice(0,2);
const returnLastTwoDrivers = arr => arr.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = multiplier => fare => fare * multiplier;
const fareDoubler = fare => createFareMultiplier(2)(fare);
const fareTripler = fare => createFareMultiplier(3)(fare);
const selectDifferentDrivers = (arr, fn) => fn(arr); 
