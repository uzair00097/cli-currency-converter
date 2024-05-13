#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"; 

console.log(chalk.blue.bold("\n\t Welcome to Currency Convertor\n"))

let exchangeRate : any = {
    "USD" : 1, // base currency
    "EUR" : 0.9,
    "JYP" : 113,
    "CAD" : 1.3,
    "AUD" : 1.65,
    "PKR" : 277.70
};
let userAnswer = await inquirer.prompt([
    {
        name : "fromCurrency",
        type : "list",
        message : "Select the currency to convert from:",
        choices : ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name : "toCurrency",
        type : "list",
        message : "Select the currency to convert into:",
        choices : ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name : "amount",
        type : "input",
        message : "Enter the amount to convert:"
    }
]);

// perform currency conversion by using formula
let fromAmount = exchangeRate [userAnswer.fromCurrency];
let toAmount = exchangeRate [userAnswer.toCurrency];
let amount = userAnswer.amount;

// conversion formula
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(`Converted Amount = ${chalk.green(convertedAmount.toFixed(2))}`);


