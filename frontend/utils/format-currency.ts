export const formatCurrency = (amount: number)=> {
  return amount.toLocaleString(undefined, {maximumFractionDigits:3})
}
