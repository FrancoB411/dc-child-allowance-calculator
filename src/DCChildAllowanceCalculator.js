import { adjustIncome, calculateTaxRate } from "./taxRateCalculator.js";


const TIME_FRAMES = {
  yearly: 1,
  monthly: 12,
  biweekly: 26,
  weekly: 52,
  daily: 365,
}

export function calculate({status, income, children, timeFrame} = params) {

  const adjustedIncome = adjustIncome(income, status);
  const tax = calculateTaxRate(adjustedIncome);
  const childAllowance = calculateChildAllowance(children);
  const netChange = calculateNetChange(childAllowance, tax);

	return calculateTimeFrame(netChange, TIME_FRAMES[timeFrame]);
}

export function calculateChildAllowance(children) {
  return children * 12 * 300;
}

export function calculateNetChange(childAllowance, tax) {
  return childAllowance - tax;
}

function calculateTimeFrame(netChange, timeFrame) {
  return (netChange) / timeFrame;
}