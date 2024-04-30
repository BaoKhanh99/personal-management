import { ExpenseCalculationType } from "@/app/types/calculation-bag.type";

export const expenseCalculation = (totalIncome:number, bag: ExpenseCalculationType): ExpenseCalculationType => {
  return {
    necessary: percentage(bag.necessary, totalIncome),
    saving: percentage(bag.saving, totalIncome),
    enjoyment: percentage(bag.enjoyment, totalIncome),
    giving: percentage(bag.giving, totalIncome),
    investment: percentage(bag.investment, totalIncome),
    studying: percentage(bag.studying, totalIncome),

  }
}

function percentage(percent: number, total: number): number {
  return Number(((percent/ 100) * total).toFixed(3));
}
