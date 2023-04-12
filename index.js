// Code your solution here
const findMatching = function(array, name) {
    let driverMatch = array.filter(item => item.toLowerCase() === name.toLowerCase());
    return driverMatch;
    };

const fuzzyMatch = function(array, name) {
    let driverMatch =  array.filter(item => item.charAt(0) == name.charAt(0));
    return driverMatch;
    };

const matchName = function(array, str) {
    let driverMatch = array.filter(item => item.name === str);
    return driverMatch;
    };