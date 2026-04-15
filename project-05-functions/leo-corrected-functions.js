// Leo M.
// Corrected JS Functions


// This is what you had for code
function nameSchool(firstName, homeSchool){
    alert(`My name is ${firstName} and I go to ${homeSchool}!`);
    return;   
}

const name = "Mike";

// Add a semicolon at end of next line of code
const school = "TC Central"

// Add a semicolon at end of next line of code
const schoolname = nameSchool(name, school)

// CORRECTED VERSION
function nameSchool(firstName, homeSchool) {
    alert(`My name is ${firstName} and I go to ${homeSchool}!`);
}

const name = "Mike";

const school = "TC Central";

const schoolname = nameSchool(name, school);


// Your version of the second JS function
function calcTriArea(base, height) {
    const myTriArea = base * height / 2;
    alert(`My right triangle has a base of ${triBase} ft., a height of ${triHeight} ft., and an area of ${myTriArea} sq ft.`);
    return myTriArea;
}

const triBase = 20;
const triHeight = 15;

const finalAnswer = calcTriArea(triBase, triHeight);


// CORRECTED VERSION OF SECOND FUNCTION
function calcTriArea(base, height) {
    const myTriArea = base * height / 2;
    alert(`My right triangle has a base of ${base} ft., a height of ${height} ft., and an area of ${myTriArea} sq ft.`);
    return myTriArea;
}

const triBase = 20;
const triHeight = 15;

const finalAnswer = calcTriArea(triBase, triHeight);

alert(finalAnswer);