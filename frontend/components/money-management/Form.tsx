"use client";

import { ExpenseCalculationType } from "@/app/types/calculation-bag.type";
import { expenseCalculation } from "@/utils/bag-calculation";
import { formatCurrency } from "@/utils/format-currency";
import { Button, CustomFlowbiteTheme, Label, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

interface props {
  calculation: any;
}

const textInput: CustomFlowbiteTheme["textInput"] = {
  base: "flex",
  addon:
    " items-center rounded-l-md border border-r-0 border-slate-300 bg-slate-200 px-3 text-sm text-slate-900 w-30",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
    },
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "p-4 sm:text-base",
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning:
          "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success:
          "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        slate:
          "border-slate-500 bg-slate-50 text-slate-900 placeholder-slate-700 focus:border-slate-500 focus:ring-slate-500",
      },
      withRightIcon: {
        on: "pr-10",
        off: "",
      },
      withIcon: {
        on: "pl-10",
        off: "",
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg",
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: "",
      },
    },
  },
};

export default function Form({ calculation }: props) {
  const [totalIncome, setTotalIncome] = useState<string>("");

  const totalIncomeInputRef = useRef<HTMLInputElement | null>(null);
  const necessaryInputRef = useRef<HTMLInputElement | null>(null);
  const savingInputRef = useRef<HTMLInputElement | null>(null);
  const investmentInputRef = useRef<HTMLInputElement | null>(null);
  const enjoymentInputRef = useRef<HTMLInputElement | null>(null);
  const givingInputRef = useRef<HTMLInputElement | null>(null);
  const studyingInputRef = useRef<HTMLInputElement | null>(null);

  const convertTotalIncomeToNumber = (totalIncome?: string) => {
    const stripped = totalIncome?.replace(/,/g, "");
    return parseInt(stripped as string);
  };

  const handleCalculation = (event: any) => {
    event.preventDefault();

    const bagPercentage: ExpenseCalculationType = {
      enjoyment: Number(enjoymentInputRef.current?.value),
      giving: Number(givingInputRef.current?.value),
      investment: Number(investmentInputRef.current?.value),
      necessary: Number(necessaryInputRef.current?.value),
      saving: Number(savingInputRef.current?.value),
      studying: Number(studyingInputRef.current?.value),
    };

    calculation(
      expenseCalculation(
        convertTotalIncomeToNumber(totalIncomeInputRef.current?.value),
        bagPercentage
      )
    );
  };

  const handleTotalIncome = () => {
    setTotalIncome(
      formatCurrency(
        convertTotalIncomeToNumber(totalIncomeInputRef.current?.value)
      )
    );
  };

  return (
    <form onSubmit={handleCalculation} className="grid grid-cols-6 gap-4">
      <div className="col-span-6 w-full mb-5">
        <div className=" flex justify-center">
          <div>
            <div className="mb-2 block text-center">
              <Label htmlFor="totalIncome" value="Total Income (VND)" />
            </div>
            <div className="w-96">
              <TextInput
                onChange={handleTotalIncome}
                value={totalIncome}
                theme={textInput}
                id="totalIncome"
                type="text"
                ref={totalIncomeInputRef}
                required
                shadow
                color={"slate"}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <TextInput
          theme={textInput}
          color={"slate"}
          id="necessary"
          addon="Necessary (%)"
          type="number"
          ref={necessaryInputRef}
          defaultValue={60}
          required
          shadow
        />
      </div>
      <div>
        <TextInput
          theme={textInput}
          id="saving"
          addon="Saving (%)"
          type="number"
          ref={savingInputRef}
          defaultValue={15}
          required
          shadow
          color={"slate"}
        />
      </div>
      <div>
        <TextInput
          theme={textInput}
          id="studying"
          addon="Studying (%)"
          type="number"
          ref={studyingInputRef}
          defaultValue={5}
          shadow
          color={"slate"}
        />
      </div>
      <div>
        <TextInput
          theme={textInput}
          id="investment"
          addon="Investment (%)"
          type="number"
          ref={investmentInputRef}
          defaultValue={5}
          required
          shadow
          color={"slate"}
        />
      </div>
      <div>
        <TextInput
          theme={textInput}
          id="enjoyment"
          addon="Enjoyment (%)"
          type="number"
          ref={enjoymentInputRef}
          defaultValue={10}
          required
          shadow
          color={"slate"}
        />
      </div>
      <div>
        <TextInput
          theme={textInput}
          id="giving"
          addon="Giving (%)"
          type="number"
          name="giving"
          ref={givingInputRef}
          defaultValue={5}
          required
          shadow
          color={"slate"}
        />
      </div>
      <div className="mt-5 col-span-6 flex justify-center">
        <div>
          <Button
            type="submit"
            className="text-slate-50 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-base px-20 py-3 text-center"
          >
            Calculate
          </Button>
        </div>
      </div>
    </form>
  );
}
