const totalMiles = 1500;
const gallonPrice = 3;
const budget = 175;
const milesPerGallonAt55 = 30;
const milesPerGallonAt60 = 28;
const milesPerGallonAt75 = 23;

const totalGallonsAt55 = totalMiles / milesPerGallonAt55; // 50
const totalGallonsAt60 = totalMiles / milesPerGallonAt60; // 53.57142857142857
const totalGallonsAt75 = totalMiles / milesPerGallonAt75; // 65.21739130434783

const totalCostAt55 = totalGallonsAt55 * gallonPrice; // 150
const totalCostAt60 = totalGallonsAt60 * gallonPrice; // 160.71428571428572
const totalCostAt75 = totalGallonsAt75 * gallonPrice; // 195.6521739130435

const totalHoursAt55 = totalMiles / 55; // 27.272727272727273
const totalHoursAt60 = totalMiles / 60; // 25
const totalHoursAt75 = totalMiles / 75; // 20
