import { createContext, Dispatch,SetStateAction } from "react";

interface IBagCalculationContext {
  isUpdate: boolean;
  setIsUpdate: Dispatch<SetStateAction<boolean>>;
}

const BagCalculationTableContext = createContext<IBagCalculationContext>({
  isUpdate: false,
  setIsUpdate: () => {},
});

export default BagCalculationTableContext;
