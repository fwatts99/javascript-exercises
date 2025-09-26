const convertToCelsius = function(input) {
    return (input - 32) * (5/9); };

const convertToFahrenheit = function(input) {
    return (input * (9/5)) + 32;};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
