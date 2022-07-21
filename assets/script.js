// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Amir Sinaei"; // HINT: Replace this with your own name!

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
const gbQtyDisplay = document.querySelector("#qty-gb");
const ccQtyDisplay = document.querySelector("#qty-cc");
const sugarQtyDisplay = document.querySelector("#qty-sugar");
const totQtyDisplay = document.querySelector("#qty-total");

// Code to update name display
credit.textContent = `Created by ${yourName}`;

//Set Counters to Zero
let gbCount = 0; // Gingerbread total count
let ccCount = 0; // Chocolate Chip total count
let sugarCount = 0; // Sugar Sprinkle total count
let totCount = 0; //Grand Total for all cookies

//Gingerbread Code
//Gingerbread PLUS Code
const gbPlusBtn = document.querySelector("#add-gb");
gbPlusBtn.addEventListener("click", function () {
  gbCount++;
  gbQtyDisplay.textContent = gbCount;
  totCount = totCount + 1;
  totQtyDisplay.textContent = totCount;
});

//Gingerbread MINUS Code
const gbMinusBtn = document.querySelector("#minus-gb");
gbMinusBtn.addEventListener("click", function () {
  if (gbCount > 0) {
    gbCount--;
    totCount = totCount - 1;
    totQtyDisplay.textContent = totCount;
  }
  gbQtyDisplay.textContent = gbCount;
});

//Chocolate Chip Code
//ChocolateChip PLUS Code
const ccPlusBtn = document.querySelector("#add-cc");
ccPlusBtn.addEventListener("click", function () {
  ccCount++;
  ccQtyDisplay.textContent = ccCount;
  totCount = totCount + 1;
  totQtyDisplay.textContent = totCount;
});

//ChocolateChip MINUS Code
const ccMinusBtn = document.querySelector("#minus-cc");
ccMinusBtn.addEventListener("click", function () {
  if (ccCount > 0) {
    ccCount--;
    totCount = totCount - 1;
    totQtyDisplay.textContent = totCount;
  }
  ccQtyDisplay.textContent = ccCount;
});

//Sugar Sprinkle Cookie Code
//Sugar Sprinkle PLUS Code
const sugarPlusBtn = document.querySelector("#add-sugar");
sugarPlusBtn.addEventListener("click", function () {
  sugarCount++;
  sugarQtyDisplay.textContent = sugarCount;
  totCount = totCount + 1;
  totQtyDisplay.textContent = totCount;
});

//ChocolateChip MINUS Code
const sugarMinusBtn = document.querySelector("#minus-sugar");
sugarMinusBtn.addEventListener("click", function () {
  if (sugarCount > 0) {
    sugarCount--;
    totCount = totCount - 1;
    totQtyDisplay.textContent = totCount;
  }
  sugarQtyDisplay.textContent = sugarCount;
});
