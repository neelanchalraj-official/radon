const date = new Date();
function printDate() {
  return console.log(date.getDate());
}
function printMonth() {
  return console.log(date.getMonth() + 1);
}
function getBatchInfo() {
  return console.log("Radon, Week 3 Day 3, the topic for today is Nodejs Intro and Nodejs Modules");
}
const output = function final() {
  printDate();
  printMonth();
  getBatchInfo();
  return;
};

module.exports.output = output;