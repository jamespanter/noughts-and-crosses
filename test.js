const people = [
    "Keenan",
    "Werner",
    "Bradly",
    "Noel",
    "Weston",
    "Rosendo",
    "Lee",
    "Edison",
    "Alonzo",
    "Donald"
];
const numbers = [64, 71, 85, 95, 96, 50, 65, 7, 57, 29];
// For each
const sayHello = name => {
    console.log("Hello " + name);
};
people.forEach(sayHello);
// Map
const addTitle = name => {
    return "Mr. " + name;
};
const peopleWithTitle = people.map(addTitle);
console.log(people);
console.log(peopleWithTitle);
// Filter
const filterByLetterE = name => {
    return name.includes("e");
};
const filteredPeople = people.filter(filterByLetterE);
console.log(people);
console.log(filteredPeople);
// Challenges
// Use the numbers array and forEach to log each number, multiplied by 2, to the console.
// Using the numbers array and map to create a new array of all the numbers multiplied by 2
// Using the numbers array and filter to create a new array of all the numbers larger than 50

const multiplyByTwo = number => number * 2;
numbers.forEach(multiplyByTwo);

const doubleNumbers = numbers.map(multiplyByTwo);

const largerThanFifty = numbers => numbers > 50;
const filterNumbers = numbers.filter(largerThanFifty);

console.log('forEach: ' + numbers);
console.log('Map: ' + doubleNumbers);
console.log('Filter: ' + filterNumbers);