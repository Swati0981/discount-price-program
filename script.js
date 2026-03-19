// Step 1: Ask user for price
let userPrice = prompt("Enter a price tag, for example: $49.99");

// Step 2: Remove dollar sign
let priceWithoutDollar = userPrice.replace("$", "");

// Step 3: Convert to number
let priceNumber = parseFloat(priceWithoutDollar);

// Step 4: Apply 10% discount
let discountedPrice = priceNumber * 0.9;

// Step 5: Show result
console.log(`Your new price is: $${discountedPrice.toFixed(2)}`);