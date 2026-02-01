console.log ("Hello from the console.")
let productname = "Lightweight Computer Mouse";
let costperunit = "25";
let baseprice = "80";
let discountrate = ".10";
let salestaxrate = ".07";
let fixedmonthlycost = "50";

let discountedprice = baseprice * (1-discountrate);
let Finalpricewithtax = discountedprice * (1+salestaxrate);
let profitperitem = Finalpricewithtax - costperunit;
let isprofitableperitem = profitperitem > 0;
let breakevenunits = isprofitableperitem
Math.ceil(fixedmonthlycost / profitperitem);
Infinity;

console.log("Product:", productname);
console.log("Discounted Price : $" + discountedprice.toFixed(2));
console.log("Final price (With Tax): $" + Finalpricewithtax.toFixed(2));
console.log("Profit Per unit: $" + profitperitem.toFixed(2));
console.log("Is Profitable per item:", isprofitableperitem);
console.log("Break even units per month:", breakevenunits);