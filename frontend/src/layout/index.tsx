import React from "react";
import Sidebar from "./sidebar";

export const Layout = ({children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="grid grid-flow-col gap-2 text-slate-900 bg-slate-50">
      <Sidebar/>
      <div className="w-full">
        <main className="container text-center">{ children }</main>
      </div>
    </div>
  );
};
