// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);  
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length-2, drivers.length); 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; 

function createFareMultiplier(int) {
  return function fareMultiplier(fare) {
    return fare*int; 
  }
}

function fareDoubler(fare) {
  const multipliedFare = createFareMultiplier(2)(fare); 
  return multipliedFare; 
}

function fareTripler(fare) {
  const multipliedFare = createFareMultiplier(3)(fare); 
  return multipliedFare; 
}

function selectDifferentDrivers(drivers, fnc) {
  return fnc(drivers); 
}