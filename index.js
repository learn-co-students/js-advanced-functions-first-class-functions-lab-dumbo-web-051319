// Code your solution in this file!


const returnFirstTwoDrivers = (driversArr) => {
    return driversArr.slice(0, 2)
}


const returnLastTwoDrivers = (driversArr) => {
    return driversArr.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



const createFareMultiplier =  (multiplyValue) => {
    return  (value) => {
      return multiplyValue * value;
    }
  }

  const fareDoubler = createFareMultiplier(2) 

  const fareTripler = createFareMultiplier(3)


// const selectDifferentDrivers = [returnFirstTwoDrivers.slice(0, 2)]  




const selectDifferentDrivers = (drivers, whatDrivers) => {
    return whatDrivers(drivers);
  }
