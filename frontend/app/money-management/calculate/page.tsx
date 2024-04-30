"use client";

import { ExpenseCalculationType } from "@/app/types/calculation-bag.type";
import Form from "@/components/money-management/Form";
import Table from "@/components/money-management/Table";
import BagCalculationTableContext from "@/contexts/bag-calculation-table-context";
import { Button } from "flowbite-react";
import Cookies from "js-cookie";
import { useState } from "react";

export default function CalculateMonthlyPage() {
  const [isUpdate, setIsUpdate] = useState(false);
  const value = { isUpdate, setIsUpdate };

  const handleTableData = (data: ExpenseCalculationType) => {
    const list: ExpenseCalculationType[] =
      Cookies.get("calculatedResult") !== undefined
        ? JSON.parse(Cookies.get("calculatedResult") as string)
        : [];

    const lastRecord = list[list.length - 1];

    Object.assign(data, {
      numericalOrder: lastRecord?.numericalOrder
        ? lastRecord.numericalOrder + 1
        : 1,
    });

    list.push(data);

    Cookies.set("calculatedResult", JSON.stringify(list));

    setIsUpdate(true);
  };

  const handleRemoveTrialCalculations = () => {
    Cookies.remove("calculatedResult");
    setIsUpdate(true);
  };

  return (
    <div className="mt-5 mb-10 text-center text-slate-900">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold">CALCULATE FOR A MONTH</h2>
      </div>
      <div className="flex justify-center">
        <div className="">
          <Form calculation={handleTableData} />
        </div>
      </div>
      <div className="mt-10 mb-5">
        <div className="grid justify-items-stretch grid-cols-2 mb-5">
          <div className="justify-self-end">
            <p className="text-2xl text-slate-900 font-medium">Result</p>
          </div>
          <div className="justify-self-end">
            <Button
            className="text-slate-50 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-base px-2 text-center"
              onClick={handleRemoveTrialCalculations}
            >
              Remove Results
            </Button>
          </div>
        </div>

        <BagCalculationTableContext.Provider value={value}>
          <div>
            <Table />
          </div>
        </BagCalculationTableContext.Provider>
      </div>
    </div>
  );
}
