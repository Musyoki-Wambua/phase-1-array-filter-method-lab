// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const  driverName = [ "Bobby", "Sammy"]



function findMatching( drivers, string){
    return drivers.filter (function (driverName){
        return driverName.toLowerCase() === string.toLowerCase ()
    })
}




function fuzzyMatch (drivers, string) {
  let nameLength = string.length;
  return drivers.filter(function (driverName) {
    return driverName.slice(0, nameLength) === string;
  });
}



function matchName (record, string) {
  return record.filter(function (driver) {
    return driver.name === string;
  });
}

