// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Mark Daniel Cabigon" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = localStorage.getItem('gb');    // Gingerbread
if (gb === null) {
    gb = 0;
} else {
    gb = parseInt(gb);
    console.log(gb);
}
let gbTd = document.querySelector("#qty-gb");
gbTd.textContent = gb


let cc = localStorage.getItem('cc');    // Chocolate Chip
if (cc === null) {
    cc = 0;
} else {
    cc = parseInt(cc);
    console.log(cc);
}
let ccTd = document.querySelector("#qty-cc");
ccTd.textContent = cc




let sugar = localStorage.getItem('sugar');    // Sugar chip
if (sugar === null) {
    sugar = 0;
} else {
    sugar = parseInt(sugar);
    console.log(sugar);
}
let sugarTd = document.querySelector("#qty-sugar");
sugarTd.textContent = sugar

let totalCookiesTd = document.querySelector("#qty-total");
totalCookiesTd.textContent = gb + cc + sugar;
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//Code to select each div




// Event listener for clicks on the "+" and "-" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
   gb = gb + 1
   document.querySelector("#qty-gb").textContent = gb ;
   localStorage.setItem('gb', gb);
   totalCookiesTd.textContent = gb + cc + sugar;
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
});
document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0){
    gb = gb - 1
    document.querySelector("#qty-gb").textContent = gb ;
    localStorage.setItem('gb', gb);
    totalCookiesTd.textContent = gb + cc + sugar;
    }
     // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
 });
// TODO: Hook up event listeners for the rest of the buttons
// Event listener for clicks on the "+" and "-" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1
    document.querySelector("#qty-cc").textContent = cc ;
    localStorage.setItem('cc', cc);
    totalCookiesTd.textContent = gb + cc + sugar;
     
 });
 document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0){ 
    cc = cc - 1
     document.querySelector("#qty-cc").textContent = cc ;
     localStorage.setItem('cc', cc);
     totalCookiesTd.textContent = gb + cc + sugar;
    }
  });
  // Event listener for clicks on the "+" and "-" button for Sugar Chip cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar + 1
    document.querySelector("#qty-sugar").textContent = sugar ;
    localStorage.setItem('sugar', sugar);
    totalCookiesTd.textContent = gb + cc + sugar;
     
 });
 document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0){ 
    sugar = sugar - 1
     document.querySelector("#qty-sugar").textContent = sugar ;
     localStorage.setItem('sugar', sugar);
     totalCookiesTd.textContent = gb + cc + sugar;
    }
  });