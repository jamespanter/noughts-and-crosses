const jamesN = {
    name: "James Nowecki",
    age: 33,
    occupation: "Web developer",
    isVegetarian: true,
    interests: ["games", "computers", "swords", "Guinea pigs"],
    favColour: "pink",
    favAnimal: "cat"
}

const jamesP = {
    name: "James Panter",
    age: 14,
    occupation: "Farmer",
    isVegetarian: false,
    interests: ["tanks", "computers", "swords", "Guinea pigs"],
    favColour: "red",
    favAnimal: "dog"
}

const matt = {
    name: "Matt",
    age: 275,
    occupation: "Wizard/Coach",
    isVegetarian: true,
    interests: ["Wizarding", "Saving damsels in distress", "dirty magic"],
    favColour: "red",
    favAnimal: "cow"
}

const people = [jamesN, jamesP, matt];

console.log(people[1].interests);