var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle"];

var arrayOne = [1];

function addElementToBeginningOfArray() {
var arrayNew = ['foo', ...arrayOne];
return arrayNew;
}

function destructivelyAddElementToBeginningOfArray() {
arrayOne.push('foo');
 return arrayOne; 
}

var arrayTwo = [1];

function addElementToEndOfArray() {
var arrayNew = [...arrayTwo, 'foo'];
  return arrayNew;
}

function destructivelyAddElementToEndOfArray() {
arrayTwo = [...arrayTwo, 'foo'];
  return arrayTwo; 
}

function accessElementInArray() {
  var numberArray = [1, 2, 3,]
  console.log(accessElementInArray[2]);
  }