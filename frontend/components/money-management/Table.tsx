"use client";

import { CustomFlowbiteTheme, Table as FlowBiteTable } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import BagCalculationTableContext from "@/contexts/bag-calculation-table-context";
import { formatCurrency } from "@/utils/format-currency";
import { ExpenseCalculationType } from "@/app/types/calculation-bag.type";

const table: CustomFlowbiteTheme["table"] = {
  root: {
    base: "w-full text-left text-sm text-slate-600",
    // shadow:
    //   "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",
    wrapper: "relative",
  },
  body: {
    base: "group/body",
    cell: {
      base: "px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg",
    },
  },
  head: {
    base: "group/head text-xs uppercase text-slate-700",
    cell: {
      base: "bg-slate-200 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg",
    },
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-slate-50",
    striped:
      "odd:bg-slate even:bg-slate-50",
  },
};

export default function Table() {
  const [result, setResult] = useState<ExpenseCalculationType[]>([]);
  const {isUpdate, setIsUpdate} = useContext(BagCalculationTableContext);


  useEffect(() => {
      setResult(
        Cookies.get("calculatedResult") !== undefined
          ? JSON.parse(Cookies.get("calculatedResult") as string)
          : []
      );
      setIsUpdate(false)
  }, [isUpdate, setIsUpdate]);

  return (
    <FlowBiteTable theme={table}>
      <FlowBiteTable.Head>
        <FlowBiteTable.HeadCell>N.O</FlowBiteTable.HeadCell>
        <FlowBiteTable.HeadCell>Necessary</FlowBiteTable.HeadCell>
        <FlowBiteTable.HeadCell>Saving</FlowBiteTable.HeadCell>
        <FlowBiteTable.HeadCell>Studying</FlowBiteTable.HeadCell>
        <FlowBiteTable.HeadCell>Investment</FlowBiteTable.HeadCell>
        <FlowBiteTable.HeadCell>Enjoyment</FlowBiteTable.HeadCell>
        <FlowBiteTable.HeadCell>Giving</FlowBiteTable.HeadCell>
      </FlowBiteTable.Head>
      <FlowBiteTable.Body className="divide-y">
        {result
          ? result.map((r: ExpenseCalculationType) => {
              return (
                <FlowBiteTable.Row
                  key={r.numericalOrder}
                  className="bg-slate-50"
                >
                  <FlowBiteTable.Cell>{r?.numericalOrder}</FlowBiteTable.Cell>
                  <FlowBiteTable.Cell>{formatCurrency(r?.necessary)}</FlowBiteTable.Cell>
                  <FlowBiteTable.Cell>{formatCurrency(r?.saving)}</FlowBiteTable.Cell>
                  <FlowBiteTable.Cell>{formatCurrency(r?.studying)}</FlowBiteTable.Cell>
                  <FlowBiteTable.Cell>{formatCurrency(r?.investment)}</FlowBiteTable.Cell>
                  <FlowBiteTable.Cell>{formatCurrency(r?.enjoyment)}</FlowBiteTable.Cell>
                  <FlowBiteTable.Cell>{formatCurrency(r?.giving)}</FlowBiteTable.Cell>
                </FlowBiteTable.Row>
              );
            })
          : null}
      </FlowBiteTable.Body>
    </FlowBiteTable>
  );
}
