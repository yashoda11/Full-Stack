// Operators - Discount Percentage

let listingPrice = 799;
let sellingPrice = 199;
let discountPercent = ((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount Percentage is: " + discountPercent);
displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + "% off");
var result = listingPrice>sellingPrice;
console.log(result);
console.log(typeof result);