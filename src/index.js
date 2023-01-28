module.exports = function toReadable(number) {
let numbers = [ "zero", "one", "two","three","four", "five", "six", "seven", "eight", "nine", "ten","eleven",
"twelve",  "thirteen",  "fourteen",   "fifteen", "sixteen", "seventeen", "eighteen",  "nineteen",  "twenty",]; 
    
let numbers2 = ["thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];        

    if (number <= 20) {
        return numbers[number];
    } else if (number > 20 && number < 100) {
        if (number % 10 === 0) {
            return numbers2[number / 10 - 3];
        } else if (Math.floor(number / 10) > 2) {
            return (
                numbers2[Math.floor(number / 10) - 3] +
                " " +
                numbers[number % 10]
            );
        } else if (Math.floor(number / 10) <= 2) {
            return numbers[20] + " " + numbers[number % 10];
        }
    } else if (number > 99 && number <= 999) {
        if (number % 100 === 0) {
            return numbers[Math.floor(number / 100)] + " hundred";
        } else {
            return (
                numbers[Math.floor(number / 100)] +
                " hundred " +
                toReadable(
                    Math.round((number / 100 - Math.floor(number / 100)) * 100)
                )
            );
        }
     }
};
