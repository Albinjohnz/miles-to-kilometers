const milesArray = [10, 20, 30]; 
function milesToKilometers(milesArray) {
    const milesToKilometersFactor = 1.60934;
    const kilometersArray = milesArray.map(miles => miles * milesToKilometersFactor);
    const totalDistanceInKilometers = kilometersArray.reduce((total, kilometers) => total + kilometers, 0);
    return totalDistanceInKilometers;
}

const totalDistanceInKilometers = milesToKilometers(milesArray);
console.log("Total Distance in Kilometers:", totalDistanceInKilometers);
