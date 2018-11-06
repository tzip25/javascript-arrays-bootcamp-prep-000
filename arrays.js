var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle"];


function addElementToBeginningOfArray() {
var arr1 = [1];
var arr1New = ['foo', ...arr1];
return arr1New;
}

function destructivelyAddElementToBeginningOfArray() {
var arr2 = [1];
arr2.unshift('foo');
return arr2;
}

function addElementToEndOfArray() {
var arr3 = [1];
var arrayNew = [...arr3, 'foo'];
  return arrayNew;
}

function destructivelyAddElementToEndOfArray() {
var arr4 = [1];
arr4.push('foo');
  return arr4; 
}

function accessElementInArray() {
  var arr5 = [1, 2, 3];
  return(arr5[2]);
  }
  
  var arr6 = [1, 2, 3];
function  destructivelyRemoveElementFromBeginningOfArray() {
return arr6.shift();
}

var arr7 = [1, 2, 3];
function removeElementFromBeginningOfArray() {
arr7.slice(1);
return arr7
}

var arr8 = [1, 2, 3];
function destructivelyRemoveElementFromEndOfArray() {
return arr8.pop();
}
 
var arr9 = [1, 2, 3];
function removeElementFromEndOfArray() {
return arr9.slice(0, arr9.length - 1);
}