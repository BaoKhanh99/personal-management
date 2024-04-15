import React from "react";
import Sidebar from "./sidebar";

export const Layout = ({children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="grid grid-flow-col gap-2 auto-cols-max">
      <Sidebar></Sidebar>
      <div className="w-full">
        <main className="container text-center">{ children }</main>
      </div>
    </div>
  );
};
