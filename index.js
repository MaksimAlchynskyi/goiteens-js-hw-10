"use strict"

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
console.log(friends.join(", "))
// ASD
const myArray = ["Mango", "Poly", "Kiwi", "Ajax"];
let joinedString = "";

for (let i = 0; i < myArray.length; i++) {
    joinedString += myArray[i];
    if (i < myArray.length - 1) {
        joinedString += ", ";
    }
}
console.log(joinedString);
// ASD

const cards = [
    "Карточка номер 1",
    "Карточка номер 2",
    "Карточка номер 3",
    "Карточка номер 4",
    "Карточка номер 5",
]
console.log(cards.indexOf("карточка номер 3"))
// ASD

cards.splice(5, 0, "Карточка номер 6")
console.log(cards)