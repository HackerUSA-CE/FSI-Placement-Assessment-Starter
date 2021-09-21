// First, tell us your name
let yourName = "German Almonte" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   //Temp total

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb += 1;
    document.getElementById('qty-gb').textContent = gb;
    total +=1;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb -= 1;
    document.getElementById('qty-gb').textContent = gb;
    total -=1;
    document.getElementById('qty-total').textContent = total;
})

// Event listener for clicks on the "+" button for Chocolate Chip Cookies
document.getElementById('add-cc').addEventListener('click', function() {
    cc += 1;
    document.getElementById('qty-cc').textContent = cc;
    total +=1;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc -= 1;
    document.getElementById('qty-cc').textContent = cc;
    total -=1;
    document.getElementById('qty-total').textContent = total;
})

// Event listener for clicks on the "+" button for Sugar Sprinkles cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar += 1;
    document.getElementById('qty-sugar').textContent = sugar;
    total +=1;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar -= 1;
    document.getElementById('qty-sugar').textContent = sugar;
    total -=1;
    document.getElementById('qty-total').textContent = total;
})