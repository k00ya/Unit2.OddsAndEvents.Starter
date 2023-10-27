// Storing references to selected DOM elements in variables
const numberInput = document.querySelector("input[name='number']");
const addButton = document.querySelector("button");
const numberBankOutput = document.querySelector("#numberBank output");
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");
const oddOutput = document.querySelector("#odds output");
const evenOutput = document.querySelector("#evens output");

// Initializing state
let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

// Function to update the DOM based on the state
const updateDOM = () => {
  numberBankOutput.textContent = numberBank.join(", ");
  oddOutput.textContent = oddNumbers.join(", ");
  evenOutput.textContent = evenNumbers.join(", ");
};

// Event listener for adding numbers to the bank
addButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  const number = Number(numberInput.value);
  if (!isNaN(number)) {
    numberBank.push(number);
    updateDOM();
  }
});

// Event listener for sorting one number
sortOneButton.addEventListener("click", () => {
  const number = numberBank.shift(); // Remove the first number
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
  updateDOM();
});

// Event listener for sorting all numbers
sortAllButton.addEventListener("click", () => {
  numberBank.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  });
  numberBank = []; // Clear the bank
  updateDOM();
});
