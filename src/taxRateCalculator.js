
export function adjustIncome(income, status) {
    let adjustedIncome;
  
    switch(status) {
    case 'individual':
      adjustedIncome = income - 12200;
      break;
    case 'head':
      adjustedIncome = income - 18350;
      break;
      case 'joint':
      adjustedIncome = income - 24400;
          break;
    default:
      throw 'Not a valid status';
    }
  
    return adjustedIncome;
}


export function calculateTaxRate(adjIncome) {
    let tax;
  
    if (adjIncome < 10_000) {
      tax = adjIncome * .0066;
    }
  
    if (adjIncome >= 10_000 && adjIncome < 40_000) {
      tax = 66 + ((adjIncome - 10000) * 0.0099);
    }
  
    if (adjIncome >= 40_000 && adjIncome < 60_000) {
      tax = 363 + ((adjIncome - 40000) * 0.0107);
    }
  
    if (adjIncome >= 60_000 && adjIncome < 350_000) {
      tax = 577 + ((adjIncome - 60000) * 0.014);
    }
  
    if (adjIncome >= 350_000 && adjIncome < 1_000_000) {
      tax = 4637 + ((adjIncome - 350000) * 0.0144);
    }
  
    if (adjIncome >= 1000000) {
      tax = 13997 + ((adjIncome - 1000000) * 0.0148);
    }
  
    return tax;
  }