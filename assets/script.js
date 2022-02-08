/**
 * Select element with id value set to credit & set text
 */
document.getElementById("credit").textContent = `Created by ${credits.author}` //config.json

/**
  * Query assortment of cookies' [+] and [-] buttons by their unique id values.
*/
const addGingerBread = document.getElementById("add-gb")
const subGingerBread = document.getElementById("minus-gb")

const addChocolateChip = document.getElementById("add-cc")
const subChocolateChip = document.getElementById("minus-cc")

const addSugarSprinkle = document.getElementById("add-sugar")
const subSugarSprinkle = document.getElementById("minus-sugar")

/**
  * Create a table of property:values along with their corresponding elements from the
  * order summary table to be updated when the corresponding values change.
  */
const orderSummary = {
  cookies: [
    { type: "Gingerbread", total: 0, element: document.getElementById("qty-gb") },
    { type: "Chocolate Chip", total: 0, element: document.getElementById("qty-cc") },
    { type: "Sugar Sprinkle", total: 0, element: document.getElementById("qty-sugar") }
  ],
  total: { value: 0, element: document.getElementById("qty-total") }
};

/**
  * Function to update the quantities and totals in the order summary
  */
const updateOrderTotal = function (cookieType, increment) {
  let newTotal = 0;

  orderSummary["cookies"].forEach(function (cookie) {
    if (cookie.type === cookieType) {
      let newQty = cookie.total + increment

      cookie.total = newQty
      cookie.element.textContent = newQty
    }
    newTotal = newTotal + cookie.total;
  })

  orderSummary.total.value = newTotal
  orderSummary.total.element.textContent = orderSummary.total.value;
}

/**
  * For each of the queried buttons, add in a listener function
  * such that every click is reflected by the corresponding variables.
  */
addGingerBread.addEventListener("click", function (event) {
  console.log("Gingerbread + button clicked!")

  updateOrderTotal("Gingerbread", 1)
})
subGingerBread.addEventListener("click", function (event) {
  console.log("Gingerbread - button clicked!")
  updateOrderTotal("Gingerbread", -1)
})
addChocolateChip.addEventListener("click", function (event) {
  console.log("Chocolate Chip + button clicked!")
  updateOrderTotal("Chocolate Chip", 1)
})
subChocolateChip.addEventListener("click", function (event) {
  console.log("Chocolate Chip - button clicked!")
  updateOrderTotal("Chocolate Chip", -1)
})
addSugarSprinkle.addEventListener("click", function (event) {
  console.log("Sugar Sprinkle + button clicked!")
  updateOrderTotal("Sugar Sprinkle", 1)
})
subSugarSprinkle.addEventListener("click", function (event) {
  console.log("Sugar Sprinkle - button clicked!")
  updateOrderTotal("Sugar Sprinkle", -1)
});