const findTheOldest = function(array) {
  const currentYear = new Date().getFullYear();

  array.sort((a, b) => {
    const lastPersonAge = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    const nextPersonAge = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    return nextPersonAge - lastPersonAge; // sort descending
  });

  return array[0];
};


// Do not edit below this line
module.exports = findTheOldest;



