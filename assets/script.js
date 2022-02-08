let yourName = "Dimitri Taoko";

/**
 * Select element with id value set to credit & set text
 */
document.getElementById("credit").textContent = `Created by ${yourName}`;

/**
  * Create a table of property:values along with their corresponding elements from the
  * order summary table and the input button that control them, for easy access.
  */
const orderSummary = {
  cookies: {
    "Gingerbread": {
      input: { add: document.getElementById("add-gb"), sub: document.getElementById("minus-gb") },
      qtyElement: document.getElementById("qty-gb"),
      qtyValue: 0
    },
    "Chocolate Chip": {
      input: { add: document.getElementById("add-cc"), sub: document.getElementById("minus-cc") },
      qtyElement: document.getElementById("qty-cc"),
      qtyValue: 0
    },
    "Sugar Sprinkle": {
      input: { add: document.getElementById("add-sugar"), sub: document.getElementById("minus-sugar") },
      qtyElement: document.getElementById("qty-sugar"),
      qtyValue: 0
    }
  },
  total: { value: 0, element: document.getElementById("qty-total") }
};

/**
  * Function to update the quantities and totals in the order summary
  */
const updateOrderTotals = () => {
  let total = orderSummary.total;
  let accumulator = 0;

  Object.keys(orderSummary.cookies)
    .map(cookie => {
      accumulator += orderSummary.cookies[cookie].qtyValue
    });

  let newTotal = accumulator >= 0 ? accumulator : orderSummary.total.value;
  total.value = newTotal
  total.element.textContent = newTotal;
};

Object.keys(orderSummary.cookies)
  .map(cookie => {
    let cookieData = orderSummary.cookies[cookie];
    let inputData = Object.entries(cookieData.input);

    /**
     * Iterate through the `input` key for => {buttonFunction: button},
     * where `buttonFunction` is a string representing the operation
     * being executed, and `button` is the button clicked.
     */
    for (const [buttonFunction, button] of inputData) {
      /**
        * For each of the queried buttons, add in a listener function
        * such that every click is reflected by the corresponding variables.
        */
      button.addEventListener("click", event => {
        //console.log(cookie)
        // Determine the increment  +/- based on the `buttonFunction` key
        let increment = buttonFunction === "sub" ? -1 : 1;
        let newQtyVal = cookieData.qtyValue + increment;

        // Amend quantity of cookie's value and the user-facing element's text
        // based on the addition of `increment`
        cookieData.qtyValue = newQtyVal >= 0 ? newQtyVal : cookieData.qtyValue;
        cookieData.qtyElement.textContent = cookieData.qtyValue;

        // Update the grand total to reflect new changes;
        updateOrderTotals();
      });
    }
  });