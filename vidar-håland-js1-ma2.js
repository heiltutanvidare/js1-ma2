// Question 1
// Create a function expression by assigning an anonmyous function
// to a variable called myFunctionExpression.
// The function should console log your name.

const myFunctionExpression = function() {
    console.log("Vidar");
};

// Question 2
// Select the input in the HTML below by its class.
// Add a click event listener.
// The callback function passed to the event listener should log the sentence I was clicked.
// You can pass the function in directly, declare it and pass it in by its name or
// assign it to a variable and pass it in by the variable name.

const myButton = document.querySelector(".btn");

function clickLogger() {
    console.log("I was clicked");
}

myButton.addEventListener("click", clickLogger);

// Question 3
// Select the input in the HTML below by its id.
// Add a keydown event listener. The callback function passed to the event listener
// should log the value of the key that was pressed.

const myInput = document.querySelector("#firstName");

myInput.addEventListener("keydown", function() {
    console.log(event.key);
});

// Question 4
// Select the button in the HTML below by its tag.
// Add a mouseover event listener.
// The callback function should add a class called hover to the button.

const dogButton = document.querySelector("button");

function addHoverClass() {
    event.target.classList.add("hover");
}

dogButton.addEventListener("mouseover", addHoverClass);

// Question 5
// Select the button in the HTML below by its data attribute
// and add a mouseout event listener to it.
// The callback function should remove the class called hover from the button.

const dogButtonTwo = document.querySelector('[data-animal="dog"]');

function removeHoverClass() {
    event.target.classList.remove("hover");
}

dogButtonTwo.addEventListener("mouseout", removeHoverClass);

// Question 6
// Select all the li tags from the HTML below.
// Using a loop, add a mouseover event listener to each tag.
// The callback function should log the value of the data attribute on each element
// when the cursor moves over it.

const listItems = document.querySelectorAll("li");

function logListItemValue() {
    console.log(event.target.innerText);
}

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", logListItemValue);
}

// Question 7

// My question 7 answer

// Question 8

// My question 8 answer

// Question 9

// My question 9 answer

// Question 10

// My question 10 answer
