// return a new list with the same strings but with the first letter capitalised
// return a list of numbers between 20 and 101
// return all strings whose length is above 5
// print all names to the console with the string: "Hello *name*, welcome to the console!"
// EXTENSION: At the bottom of the console log print the string "Total names: *total number of names*"

const nologyPeeps = ["shea", "matt", "liam", "ollie", "francesca", "ben", "jenna", "hatti"];
const numbers = [89, 12, 13, 42, 84, 11, 100, 324, 25];

const capitalise = name => name.charAt(0).toUpperCase() + name.slice(1);
const newNames = nologyPeeps.map(capitalise);

console.log(newNames);

const filterList = list => list > 20 && list < 101;

const filterNumbs = numbers.filter(filterList);
console.log(filterNumbs);

const longString = name => name.length > 5;

const longNames = nologyPeeps.filter(longString);
console.log(longNames);

const helloNames = name => console.log("Hello " + name + ", welcome to the console!");

nologyPeeps.forEach(helloNames);
console.log(`Total names: ${nologyPeeps.length}`);