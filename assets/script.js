let GBA = 0
let GB = localStorage.getItem("Gb");

// First, tell us your name
let yourName = "Anthony Kariuki" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb + 1;
    document.getElementById('qty-gb').textContent = gb;
    total = total + 1;
    document.getElementById('qty-total').textContent = total; 

  })
document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb - 1;
    document.getElementById('qty-gb').textContent= gb;
    total = total - 1;
    document.getElementById('qty-total').textContent = total;
})



document.getElementById('add-cc').addEventListener('click', function(){
  cc = cc + 1;
  document.getElementById('qty-cc').textContent = cc;
  total = total + 1;
  document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-cc').addEventListener('click', function(){
  cc = cc - 1;
  document.getElementById('qty-cc').textContent = cc;
  total = total - 1;
  document.getElementById('qty-total').textContent= total;
})





document.getElementById('add-sugar').addEventListener('click', function() {
  sugar = sugar + 1;
  document.getElementById('qty-sugar').textContent = sugar;
  total = total + 1;
  document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
  sugar = sugar - 1;
  document.getElementById('qty-sugar').textContent = sugar;
  total = total - 1;
  document.getElementById('qty-total').textContent = total;
})
