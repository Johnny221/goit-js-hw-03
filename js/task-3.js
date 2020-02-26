const findBestEmployee = function(employees) {
  const numberOfTasks = Object.entries(employees);
  let theBestEmployee = numberOfTasks[0];

  for (const numberOfTask of numberOfTasks) {
    if (theBestEmployee[1] < numberOfTask[1]) {
      theBestEmployee = numberOfTask;
    }
  }

  return theBestEmployee[0];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
